using System;

namespace Domain.Entities
{
    public class GameRank
    {
        public Guid GameId { get; set; }
        public Guid ProfileId { get; set; }
        public Game Game { get; set; }
        public Profile Profile { get; set; }
        public short Rank { get; set; }
    }
}