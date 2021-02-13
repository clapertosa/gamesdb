using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Mediatr.Game.Queries
{
    public class GameStatsQuery : IRequest<GameStats>
    {
        public int GameId { get; set; }
    }

    public class GameStatsQueryHandler : IRequestHandler<GameStatsQuery, GameStats>
    {
        private readonly IApplicationDbContext _applicationDbContext;
        private readonly IUserAccessor _userAccessor;

        public GameStatsQueryHandler(IApplicationDbContext applicationDbContext, IUserAccessor userAccessor)
        {
            _applicationDbContext = applicationDbContext;
            _userAccessor = userAccessor;
        }

        public async Task<GameStats> Handle(GameStatsQuery request, CancellationToken cancellationToken)
        {
            string profileId = _userAccessor.GetCurrentProfileId();

            var followers = await _applicationDbContext.Followings.Where(x => x.Game.IgdbId == request.GameId)
                .ToListAsync(cancellationToken);
            var ranks = await _applicationDbContext.Ranks.Where(x => x.Game.IgdbId == request.GameId)
                .ToListAsync(cancellationToken);

            return new GameStats
            {
                TotalFollowers = followers.Count, TotalVotes = ranks.Count,
                IsFollowing = followers.FirstOrDefault(x => x.ProfileId.ToString() == profileId) != null,
                Vote = ranks.FirstOrDefault(x => x.ProfileId.ToString() == profileId)?.Rank
            };
        }
    }
}