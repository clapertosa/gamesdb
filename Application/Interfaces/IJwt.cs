using System;
using Infrastructure.Identity;

namespace Application.Interfaces
{
    public interface IJwt
    {
        string CreateToken(string username, Guid profileId);
        RefreshToken GenerateRefreshToken();
    }
}