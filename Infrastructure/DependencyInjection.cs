using Application.Interfaces;
using Infrastructure.Identity;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            // Database and Identity config
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
            });
            services.AddIdentityCore<AppUser>().AddEntityFrameworkStores<ApplicationDbContext>()
                .AddUserManager<UserManager<AppUser>>();

            // Services Dependency Injection
            services.AddTransient<IIdentityService, IdentityService>();
        }
    }
}