using System.Collections;
using System.Collections.Generic;
using Domain.Entities.GDB.Enums;

namespace Domain.Entities.GDB
{
    public class GdbAgeRatings
    {
        public GdbCategoryEnum Category { get; set; }
        public string Checksum { get; set; }
        public ICollection<GdbAgeRatingContentDescription> ContentDescriptions { get; set; }
        public GdbRatingEnum Rating { get; set; }
        public string RatingCoverUrl { get; set; }
        public string Synopsis { get; set; }
    }
}