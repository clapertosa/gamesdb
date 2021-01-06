using System.Threading.Tasks;
using Domain.Entities;

namespace Application.Interfaces
{
    public interface IIdentityService
    {
        public Task<bool> CreateUserAsync(SignUpUserForm form);

        public Task<User> SignInAsync(SignInUserForm form);

        public Task<string> GetEmailAsync(string userId);

        public Task<bool> EditUsernameAsync(string userId);

        public Task<bool> EditEmailAsync(string userId);

        public Task<bool> DeleteUserAsync(string userId);
    }
}