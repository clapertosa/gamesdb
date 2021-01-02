using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public partial class DbContext
    {
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<GameUser> Followings { get; set; }
        public DbSet<GameUser> Wanted { get; set; }
        public DbSet<GameUser> Playing { get; set; }
        public DbSet<GameUser> Ranks { get; set; }
    }
}