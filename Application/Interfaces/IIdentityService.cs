using System.Threading.Tasks;
using Domain.DTOs;
using Domain.Entities;

namespace Application.Interfaces
{
    public interface IIdentityService
    {
        public Task<bool> CreateUserAsync(SignUpUserForm form);

        public Task<User> SignInAsync(SignInUserForm form);

        public Task<User> GetCurrentUserAsync();
        public Task<User> RefreshToken(string token);
    }
}