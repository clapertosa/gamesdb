using System;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
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

        [HttpPost("signup")]
        public async Task<bool> CreateUser([FromBody]SignUpUser user)
        {
           return await  _identityService.CreateUserAsync(user.Email, user.UserName, user.Password);
        }
    }
}