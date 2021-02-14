using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.DTOs;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Mediatr.User.Queries
{
    public class GetUserProfileQuery : IRequest<ProfileDto>
    {
    }

    public class GetUserProfileQueryHandler : IRequestHandler<GetUserProfileQuery, ProfileDto>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IUserAccessor _userAccessor;

        public GetUserProfileQueryHandler(IApplicationDbContext dbContext, IUserAccessor userAccessor)
        {
            _dbContext = dbContext;
            _userAccessor = userAccessor;
        }

        public async Task<ProfileDto> Handle(GetUserProfileQuery request, CancellationToken cancellationToken)
        {
            string currentProfileId = _userAccessor.GetCurrentProfileId();

            Profile profile = await _dbContext.Profiles.Where(x => x.Id == new Guid(currentProfileId))
                .Include(x => x.GameFollowed).ThenInclude(g => g.Game).Include(x => x.Ranks).ThenInclude(g => g.Game)
                .FirstOrDefaultAsync(cancellationToken);

            ProfileDto profileDto = new ProfileDto
            {
                Avatar = profile.Avatar,
                FollowedGames = new List<GameDto>(),
                VotedGames = new List<GameDto>()
            };

            foreach (var gameFollowing in profile.GameFollowed)
            {
                profileDto.FollowedGames.Add(new GameDto
                {
                    Id = gameFollowing.GameId,
                    IgdbId = gameFollowing.Game.IgdbId,
                    Title = gameFollowing.Game.Title,
                    Description = gameFollowing.Game.Description,
                    CoverPath = gameFollowing.Game.CoverPath,
                });
            }

            foreach (var rank in profile.Ranks)
            {
                profileDto.VotedGames.Add(new GameDto
                {
                    Id = rank.GameId,
                    IgdbId = rank.Game.IgdbId,
                    Title = rank.Game.Title,
                    Description = rank.Game.Description,
                    CoverPath = rank.Game.CoverPath,
                });
            }

            return profileDto;
        }
    }
}