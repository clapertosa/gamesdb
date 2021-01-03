using System;
using System.Text;
using System.Threading.Tasks;
using Application.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class IdentityService:IIdentityService
    {
        private readonly UserManager<AppUser> _userManager;

        public IdentityService(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }
        

        public async Task<bool> CreateUserAsync(string username, string email, string password)
        {
            AppUser user = await _userManager.FindByEmailAsync(email);
            
            // If user exists
            if (user != null) throw new Exception("Email already in use.");
            
            // Create a new user
            var result = await _userManager.CreateAsync(new AppUser {Email = email, UserName = username}, password);

            return result.Succeeded;
        }

        public async Task<string> GetEmailAsync(string userId)
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> EditUsernameAsync(string userId)
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> EditEmailAsync(string userId)
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> DeleteUserAsync(string userId)
        {
            throw new System.NotImplementedException();
        }
    }
}