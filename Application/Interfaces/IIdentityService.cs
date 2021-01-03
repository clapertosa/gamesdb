using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IIdentityService
    {
        public Task<bool> CreateUserAsync(string username, string email, string password);

        public Task<string> GetEmailAsync(string userId);

        public Task<bool> EditUsernameAsync(string userId);

        public Task<bool> EditEmailAsync(string userId);

        public Task<bool> DeleteUserAsync(string userId);
    }
}