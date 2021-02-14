using System.Collections.Generic;

namespace Domain.DTOs
{
    public class ProfileDto
    {
        public string Avatar { get; set; }
        public ICollection<GameDto> FollowedGames { get; set; } = new List<GameDto>();
        public ICollection<GameDto> VotedGames { get; set; } = new List<GameDto>();
    }
}