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

        public async Task<bool> CreateUserAsync()
        {
            throw new System.NotImplementedException();
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