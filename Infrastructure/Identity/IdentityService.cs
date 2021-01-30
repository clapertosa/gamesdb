using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain.DTOs;
using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IJwt _jwt;
        private readonly ApplicationDbContext _dbContext;
        private readonly IUserAccessor _userAccessor;

        public IdentityService(IConfiguration configuration, UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager, IJwt jwt, ApplicationDbContext dbContext, IUserAccessor userAccessor )
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _jwt = jwt;
            _dbContext = dbContext;
            _userAccessor = userAccessor;
        }

        public async Task<bool> CreateUserAsync(SignUpUserForm form)
        {
            AppUser user = await _userManager.FindByEmailAsync(form.Email);

            // If user exists
            if (user.UserName == form.UserName.Trim().ToLower())
                throw new RestException(HttpStatusCode.Conflict, new { message = "Username already in use." });
            if (user.Email.ToLower() == form.Email.Trim().ToLower())
                throw new RestException(HttpStatusCode.Conflict, new { message = "Email already in use." });

            // Create a new user
            Guid userId = Guid.NewGuid();
            var result = await _userManager.CreateAsync(
                new AppUser
                {
                    Id = userId.ToString(),
                    Email = form.Email,
                    UserName = form.UserName.Trim().ToLower(),
                    Profile = new Profile { Avatar = form.Avatar, AppUserId = userId }
                },
                form.Password);

            return result.Succeeded;
        }

        public async Task<User> SignInAsync(SignInUserForm form)
        {
            var user = await _userManager.FindByEmailAsync(form.Email);

            if (user == null)
                throw new RestException(HttpStatusCode.Unauthorized, new { message = "Invalid UserName or Password" });

            var result = await _signInManager.CheckPasswordSignInAsync(user, form.Password, false);

            if (result.Succeeded)
            {
                Profile profile = await _dbContext.Profiles.Where(x => x.Id == user.ProfileId).FirstOrDefaultAsync();

                var newRefreshToken = _jwt.GenerateRefreshToken();
                user.RefreshTokens.Add(newRefreshToken);

                await _userManager.UpdateAsync(user);

                return new User
                {
                    Avatar = profile.Avatar,
                    Email = user.Email,
                    UserName = user.UserName,
                    Token = _jwt.CreateToken(user.UserName),
                    RefreshToken = newRefreshToken.Token
                };
            }

            throw new RestException(HttpStatusCode.Unauthorized, new { message = "Invalid UserName or Password" });
        }

        public async Task<User> GetCurrentUserAsync()
        {
            AppUser user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUsername());
            Profile userProfile = await _dbContext.Profiles.Where(x => x.Id == user.ProfileId).FirstOrDefaultAsync();

            return new User
            {
                Avatar = userProfile.Avatar,
                Email = user.Email,
                UserName = user.UserName,
                Token = _jwt.CreateToken(user.UserName)
            };
        }

        public async Task<User> RefreshToken(string token)
        {
            RefreshToken oldToken = await _dbContext.RefreshTokens.FirstOrDefaultAsync(x => x.Token == token);
            if (oldToken == null) throw new RestException(HttpStatusCode.Unauthorized);
            AppUser user = await _userManager.FindByIdAsync(oldToken.AppUserId);
            Profile userProfile = await _dbContext.Profiles.Where(x => x.Id == user.ProfileId).FirstOrDefaultAsync();

            if (oldToken != null && !oldToken.IsActive) throw new RestException(HttpStatusCode.Unauthorized);

            // Revoke token
            oldToken.Revoked = DateTime.UtcNow;

            var newRefreshToken = _jwt.GenerateRefreshToken();
            user.RefreshTokens.Add(newRefreshToken);

            await _userManager.UpdateAsync(user);

            return new User
            {
                Avatar = userProfile.Avatar,
                UserName = user.UserName,
                Email = user.Email,
                Token = _jwt.CreateToken(user.UserName),
                RefreshToken = newRefreshToken.Token
            };
        }
    }
}