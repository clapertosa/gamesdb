using Domain.Entities;
using Infrastructure.Identity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public partial class ApplicationDbContext
    {
        public DbSet<Game> Games { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<GameFollowing> Followings { get; set; }
        public DbSet<GameWanted> Wanted { get; set; }
        public DbSet<GamePlaying> Playing { get; set; }
        public DbSet<GameRank> Ranks { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}