using System;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppUser : IdentityUser
    {
        public Profile Profile { get; set; }
        public Guid ProfileId { get; set; }
    }
}