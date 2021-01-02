using System;

namespace Domain.Entities
{
    public class Game
    {
        public Guid Id { get; set; }
        public int IgdbId { get; set; }
        public string Title { get; set; }
    }
}