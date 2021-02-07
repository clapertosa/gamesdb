using Infrastructure.Identity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public partial class ApplicationDbContext
    {
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}