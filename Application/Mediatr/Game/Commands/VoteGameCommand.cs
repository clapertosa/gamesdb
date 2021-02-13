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
    public class VoteGameCommand : IRequest
    {
        public GdbGame Game { get; set; }
        public short Vote { get; set; }
    }

    public class VoteGameCommandHandler : IRequestHandler<VoteGameCommand>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IUserAccessor _userAccessor;

        public VoteGameCommandHandler(IApplicationDbContext dbContext, IUserAccessor userAccessor)
        {
            _dbContext = dbContext;
            _userAccessor = userAccessor;
        }

        public async Task<Unit> Handle(VoteGameCommand request, CancellationToken cancellationToken)
        {
            string currentProfileId = _userAccessor.GetCurrentProfileId();

            if (request.Vote <= 0 || request.Vote > 5)
                throw new RestException(HttpStatusCode.Forbidden, new {message = "Rank must be between 1 and 5."});

            if (currentProfileId == null)
            {
                throw new RestException(HttpStatusCode.Forbidden, new {message = "Not authorized."});
            }

            Domain.Entities.Game game = await _dbContext.Games.FirstOrDefaultAsync(x => x.IgdbId == request.Game.Id,
                cancellationToken);

            if (game == null)
            {
                game = new Domain.Entities.Game
                {
                    Id = Guid.NewGuid(), IgdbId = request.Game.Id, Title = request.Game.Name,
                    Description = request.Game.Summary, CoverPath = request.Game.Cover.Url
                };
                _dbContext.Games.Add(game);
            }

            GameRank gameRank = await _dbContext.Ranks.FirstOrDefaultAsync(x =>
                x.Game.IgdbId == game.IgdbId && x.ProfileId.ToString() == currentProfileId, cancellationToken);

            if (gameRank == null)
                gameRank = new GameRank {Game = game, ProfileId = new Guid(currentProfileId), Rank = request.Vote};
            else if (gameRank.Rank == request.Vote) gameRank.Rank = 0;
            else gameRank.Rank = request.Vote;

            _dbContext.Ranks.Update(gameRank);

            bool success = await _dbContext.SaveChangesAsync(cancellationToken) > 0;

            if (success) return Unit.Value;
            throw new RestException(HttpStatusCode.InternalServerError, new {message = "An error occurred."});
        }
    }
}