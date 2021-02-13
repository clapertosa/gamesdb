using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain.Entities;
using Domain.Entities.GDB;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Mediatr.Game.Commands
{
    public class FollowGameCommand : IRequest
    {
        public GdbGame Game { get; set; }
    }

    public class FollowGameCommandHandler : IRequestHandler<FollowGameCommand>
    {
        private readonly IUserAccessor _userAccessor;
        private readonly IApplicationDbContext _dbContext;

        public FollowGameCommandHandler(IUserAccessor userAccessor,
            IApplicationDbContext dbContext)
        {
            _userAccessor = userAccessor;
            _dbContext = dbContext;
        }

        public async Task<Unit> Handle(FollowGameCommand request, CancellationToken cancellationToken)
        {
            string currentProfileId = _userAccessor.GetCurrentProfileId();

            if (currentProfileId == null)
            {
                throw new RestException(HttpStatusCode.Forbidden, new {message = "Not authorized."});
            }

            Domain.Entities.Game game = await _dbContext.Games.FirstOrDefaultAsync(x => x.IgdbId == request.Game.Id, cancellationToken: cancellationToken);

            if (game == null)
            {
                game = new Domain.Entities.Game
                {
                    Id = Guid.NewGuid(), IgdbId = request.Game.Id, Title = request.Game.Name,
                    Description = request.Game.Summary, CoverPath = request.Game.Cover.Url
                };
                _dbContext.Games.Add(game);
            }

            bool alreadyFollowing = await _dbContext.Followings.FirstOrDefaultAsync(x =>
                x.GameId == game.Id && x.ProfileId == new Guid(currentProfileId),  cancellationToken) != null;

            if (alreadyFollowing)
                throw new RestException(HttpStatusCode.Conflict, new {message = $"Already following {game.Title}."});

            _dbContext.Followings.Add(new GameFollowing
            {
                GameId = game.Id, ProfileId = new Guid(currentProfileId)
            });

            bool success = await _dbContext.SaveChangesAsync(cancellationToken) > 0;

            if (success) return Unit.Value;
            throw new RestException(HttpStatusCode.InternalServerError, new {message = "An error occurred."});
        }
    }
}