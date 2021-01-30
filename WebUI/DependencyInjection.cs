using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using Application.Mediatr.User.Commands;

namespace WebUI
{
    public static class DependencyInjection
    {
        public static void AddWebUI(this IServiceCollection services, IConfiguration configuration, string corsPolicy)
        {
            services.AddControllers(options =>
            {
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            }).AddFluentValidation(mvcConfiguration =>
            {
                mvcConfiguration.RegisterValidatorsFromAssembly(typeof(SignUpValidator).Assembly);
            });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT_SECRET"])),
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                };
            });
            services.AddCors(options =>
            {
                options.AddPolicy(corsPolicy,
                    builder => { builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowCredentials(); });
            });
        }
    }
}