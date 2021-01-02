using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Profile
    {
        public Guid Id { get; set; }
        public string Avatar { get; set; }
        public virtual ICollection<GameUser> Followings { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> Wanted { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> Playing { get; set; } = new List<GameUser>();
        public virtual ICollection<GameUser> Played { get; set; } = new List<GameUser>();
        public virtual ICollection<GameRankUser> Ranks { get; set; } = new List<GameRankUser>();
    }
}