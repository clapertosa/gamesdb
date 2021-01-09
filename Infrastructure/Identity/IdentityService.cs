using System;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Http;
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
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ApplicationDbContext _dbContext;

        public IdentityService(IConfiguration configuration, UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager, IJwt jwt, IHttpContextAccessor httpContextAccessor,
            ApplicationDbContext dbContext)
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _jwt = jwt;
            _httpContextAccessor = httpContextAccessor;
            _dbContext = dbContext;
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

        public async Task<User> SignInAsync(SignInUserForm form)
        {
            var user = await _userManager.FindByEmailAsync(form.Email);

            if (user == null)
                throw new RestException(HttpStatusCode.Unauthorized, new {message = "Invalid UserName or Password"});

            var result = await _signInManager.CheckPasswordSignInAsync(user, form.Password, false);

            if (result.Succeeded)
            {
                Profile profile = await _dbContext.Profiles.Where(x => x.Id == user.ProfileId).FirstOrDefaultAsync();

                return new User
                {
                    Avatar = profile.Avatar, Email = user.Email, UserName = user.UserName,
                    Token = _jwt.CreateToken(user.UserName)
                };
            }

            throw new RestException(HttpStatusCode.Unauthorized, new {message = "Invalid UserName or Password"});
        }

        public async Task<User> GetCurrentUserAsync()
        {
            string userName = _httpContextAccessor.HttpContext?.User?.Claims?
                .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            AppUser user = await _userManager.FindByNameAsync(userName);
            Profile userProfile = await _dbContext.Profiles.Where(x => x.Id == user.ProfileId).FirstOrDefaultAsync();

            return new User
            {
                Avatar = userProfile.Avatar, Email = user.Email, UserName = user.UserName,
                Token = _jwt.CreateToken(userName)
            };
        }
    }
}