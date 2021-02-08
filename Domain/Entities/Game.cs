using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Game
    {
        public Guid Id { get; set; }
        public int IgdbId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CoverPath { get; set; }
        public virtual ICollection<GameFollowing> FollowedBy { get; set; } = new List<GameFollowing>();
        public virtual ICollection<GameWanted> WantedBy { get; set; } = new List<GameWanted>();
        public virtual ICollection<GamePlaying> PlayingBy { get; set; } = new List<GamePlaying>();
        public virtual ICollection<GamePlayed> PlayedBy { get; set; } = new List<GamePlayed>();
        public virtual ICollection<GameRank> Ranks { get; set; } = new List<GameRank>();
    }
}