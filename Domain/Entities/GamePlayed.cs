using System;

namespace Domain.Entities
{
    public class GamePlayed
    {
        public Guid GameId { get; set; }
        public Guid ProfileId { get; set; }
        public Game Game { get; set; }
        public Profile Profile { get; set; }
    }
}