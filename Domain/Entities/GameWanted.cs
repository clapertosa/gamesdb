using System;

namespace Domain.Entities
{
    public class GameWanted
    {
        public Guid GameId { get; set; }
        public Guid ProfileId { get; set; }
        public Game Game { get; set; }
        public Profile Profile { get; set; }
    }
}