using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Profile
    {
        public Guid Id { get; set; }
        public Guid AppUserId { get; set; }
        public string Avatar { get; set; }
        public ICollection<GameFollowing> GameFollowed { get; set; } = new List<GameFollowing>();
        public ICollection<GameWanted> GameWanted { get; set; } = new List<GameWanted>();
        public ICollection<GamePlaying> GamePlaying { get; set; } = new List<GamePlaying>();
        public ICollection<GamePlayed> GamePlayed { get; set; } = new List<GamePlayed>();
        public ICollection<GameRank> Ranks { get; set; } = new List<GameRank>();
    }
}