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
    public class UnfollowGameCommand : IRequest
    {
        public GdbGame Game { get; set; }
    }

    public class UnfollowGameCommandHandler : IRequestHandler<UnfollowGameCommand>
    {
        private readonly IUserAccessor _userAccessor;
        private readonly IApplicationDbContext _dbContext;

        public UnfollowGameCommandHandler(IUserAccessor userAccessor, IApplicationDbContext dbContext)
        {
            _userAccessor = userAccessor;
            _dbContext = dbContext;
        }

        public async Task<Unit> Handle(UnfollowGameCommand request, CancellationToken cancellationToken)
        {
            string currentProfileId = _userAccessor.GetCurrentProfileId();

            if (currentProfileId == null)
            {
                throw new RestException(HttpStatusCode.Forbidden, new {message = "Not authorized."});
            }

            Domain.Entities.Game game = await _dbContext.Games.FirstOrDefaultAsync(x => x.IgdbId == request.Game.Id,
                cancellationToken: cancellationToken);

            if (game == null)
            {
                throw new RestException(HttpStatusCode.NotFound);
            }

            GameFollowing followedGame = await _dbContext.Followings.FirstOrDefaultAsync(x =>
                x.GameId == game.Id && x.ProfileId == new Guid(currentProfileId), cancellationToken);

            if (followedGame == null)
                throw new RestException(HttpStatusCode.Conflict, new {message = $"You're not following {game.Title}."});

            _dbContext.Followings.Remove(followedGame);

            bool success = await _dbContext.SaveChangesAsync(cancellationToken) > 0;

            if (success) return Unit.Value;
            throw new RestException(HttpStatusCode.InternalServerError, new {message = "An error occurred."});
        }
    }
}