using System.Collections.Generic;

namespace Domain.Entities.GDB
{
    public class GdbGame
    {
        public ICollection<GdbAgeRatings> AgeRatings { get; set; }
        public double AggregatedRating { get; set; }
        public int AggregatedRatingCount { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
    }
}