using System;
using System.Net;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IJwt _jwt;

        public IdentityService(IConfiguration configuration, UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager, IJwt jwt)
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _jwt = jwt;
        }

        public async Task<bool> CreateUserAsync(SignUpUserForm form)
        {
            AppUser user = await _userManager.FindByEmailAsync(form.Email);

            // If user exists
            if (user.UserName == form.UserName.Trim().ToLower())
                throw new RestException(HttpStatusCode.Conflict, new {message = "Username already in use."});
            if (user.Email.ToLower() == form.Email.Trim().ToLower())
                throw new RestException(HttpStatusCode.Conflict, new {message = "Email already in use."});

            // Create a new user
            Guid userId = Guid.NewGuid();
            var result = await _userManager.CreateAsync(
                new AppUser
                {
                    Id = userId.ToString(),
                    Email = form.Email,
                    UserName = form.UserName.Trim().ToLower(),
                    Profile = new Profile {Avatar = form.Avatar, AppUserId = userId}
                },
                form.Password);

            return result.Succeeded;
        }

        public async Task<User> SignIn(SignInUserForm form)
        {
            var user = await _userManager.FindByEmailAsync(form.Email);

            if (user == null) throw new RestException(HttpStatusCode.Unauthorized);

            var result = await _signInManager.CheckPasswordSignInAsync(user, form.Password, false);

            if (result.Succeeded)
            {
                return new User
                    {Email = user.Email, UserName = user.UserName, Token = _jwt.CreateToken(user.Id, user.UserName)};
            }

            throw new RestException(HttpStatusCode.Unauthorized);
        }

        public async Task<string> GetEmailAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> EditUsernameAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> EditEmailAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteUserAsync(string userId)
        {
            throw new NotImplementedException();
        }
    }
}