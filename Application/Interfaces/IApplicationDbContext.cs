using System.Threading;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces
{
    public interface IApplicationDbContext
    {
        public DbSet<Game> Games { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<GameFollowing> Followings { get; set; }
        public DbSet<GameRank> Ranks { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}