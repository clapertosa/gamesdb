using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class UserController : BaseController
    {
        private readonly IIdentityService _identityService;

        public UserController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [AllowAnonymous]
        [HttpPost("signup")]
        public async Task<bool> CreateUser([FromBody] SignUpUserForm form)
        {
            return await _identityService.CreateUserAsync(form);
        }

        [AllowAnonymous]
        [HttpPost("signin")]
        public async Task<User> SignIn([FromBody] SignInUserForm form)
        {
            return await _identityService.SignInAsync(form);
        }

        [HttpGet("current_user")]
        public async Task<User> GetCurrentUser()
        {
            return await _identityService.GetCurrentUserAsync();
        }
    }
}