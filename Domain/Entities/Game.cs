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
        public ICollection<GameFollowing> FollowedBy { get; set; } = new List<GameFollowing>();
        public ICollection<GameRank> Ranks { get; set; } = new List<GameRank>();
    }
}