using System;

namespace Domain.DTOs
{
    public class GameDto
    {
        public Guid Id { get; set; }
        public int IgdbId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CoverPath { get; set; }
    }
}