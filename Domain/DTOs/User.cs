using System.Text.Json.Serialization;

namespace Domain.DTOs
{
    public class User
    {
        public string Avatar { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }

        [JsonIgnore] public string RefreshToken { get; set; }
    }
}