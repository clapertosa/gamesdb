using System;
using Application.Interfaces;
using Infrastructure.Identity;
using Infrastructure.Options;
using Infrastructure.Persistence;
using Infrastructure.Services;
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
            services.AddIdentityCore<AppUser>(options =>
                {
                    options.User.RequireUniqueEmail = true;
                    options.Password.RequireDigit = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequiredLength = 8;
                }).AddEntityFrameworkStores<ApplicationDbContext>()
                .AddUserManager<UserManager<AppUser>>().AddSignInManager<SignInManager<AppUser>>();

            // Redis
            services.AddStackExchangeRedisCache(options => { options.Configuration = "localhost:6379"; });

            // Services Dependency Injection
            services.AddTransient<IIdentityService, IdentityService>();
            services.AddTransient<HttpContextMiddleware>();
            services.AddScoped<IApplicationDbContext, ApplicationDbContext>();
            services.AddScoped<IJwt, Jwt>();
            services.AddScoped<IUserAccessor, UserAccessor>();
            services.AddScoped<IGdb, Gdb>();
            services.AddHttpClient("OAUTH",
                client => { client.BaseAddress = new Uri($"https://id.twitch.tv/oauth2/token"); });
            services.AddHttpClient("GDB", client => { client.BaseAddress = new Uri("https://api.igdb.com/v4/"); })
                .AddHttpMessageHandler<HttpContextMiddleware>();
        }
    }
}