using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Mediatr.User.Queries
{
    public class GetUserGamesQuery : IRequest<Profile>
    {
    }

    public class GetUserGamesQueryHandler : IRequestHandler<GetUserGamesQuery, Profile>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IUserAccessor _userAccessor;

        public GetUserGamesQueryHandler(IApplicationDbContext dbContext, IUserAccessor userAccessor)
        {
            _dbContext = dbContext;
            _userAccessor = userAccessor;
        }

        public async Task<Profile> Handle(GetUserGamesQuery request, CancellationToken cancellationToken)
        {
            string currentProfileId = _userAccessor.GetCurrentProfileId();

            Profile profile = await _dbContext.Profiles.Include(x => x.GameFollowed).Include(x => x.Ranks)
                .Where(x => x.Id == new Guid(currentProfileId)).FirstAsync(cancellationToken);

            return profile;
        }
    }
}