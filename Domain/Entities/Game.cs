using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Game
    {
        public Guid Id { get; set; }
        public int IgdbId { get; set; }
        public string Title { get; set; }
        public virtual ICollection<GameUser> FollowedBy { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> WantedBy { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> PlayingBy { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> PlayedBy { get; set; } = new List<GameUser>();
        public virtual ICollection<GameRankUser> Ranks { get; set; } = new List<GameRankUser>();
    }
}