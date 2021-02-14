using System.Reflection;
using Application.Interfaces;
using Domain.Entities;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public partial class ApplicationDbContext : IdentityDbContext<AppUser>, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(builder);
        }

        public DbSet<Game> Games { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<GameFollowing> Followings { get; set; }
        public DbSet<GameRank> Ranks { get; set; }
    }
}