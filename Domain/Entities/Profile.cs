using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Profile
    {
        public Guid Id { get; set; }
        public string Avatar { get; set; }
        public virtual ICollection<GameUser> GameFollowed { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> GameWanted { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> GamePlaying { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> GamePlayed { get; set; } = new List<GameUser>();
        public virtual ICollection<GameRankUser> Ranks { get; set; } = new List<GameRankUser>();
    }
}