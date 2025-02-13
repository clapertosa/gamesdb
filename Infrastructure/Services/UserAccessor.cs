﻿using System.Linq;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Services
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserAccessor(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetCurrentUsername()
        {
            return _httpContextAccessor.HttpContext?.User?.Claims?
                .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
        }

        public string GetCurrentProfileId()
        {
            return _httpContextAccessor.HttpContext?.User?.Claims?.FirstOrDefault(x => x.Type == "profileId")?.Value;
        }
    }
}