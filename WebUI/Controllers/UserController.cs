using System;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.DTOs;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> CreateUser([FromBody] SignUpUserForm form)
        {
            return Ok(await _identityService.CreateUserAsync(form));
        }

        [AllowAnonymous]
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] SignInUserForm form)
        {
            User user = await _identityService.SignInAsync(form);
            SetTokenCookie(user.RefreshToken);
            return Ok(user);
        }

        [HttpGet("current_user")]
        public async Task<IActionResult> GetCurrentUser()
        {
            return Ok(await _identityService.GetCurrentUserAsync());
        }

        [AllowAnonymous]
        [HttpPost("refresh_token")]
        public async Task<IActionResult> RefreshToken()
        {
            string token = Request.Cookies["refreshToken"];
            User user = await _identityService.RefreshToken(token);
            SetTokenCookie(user.RefreshToken);
            return Ok(user);
        }

        private void SetTokenCookie(string refreshToken)
        {
            CookieOptions cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTimeOffset.UtcNow.AddDays(7)
            };

            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
        }
    }
}