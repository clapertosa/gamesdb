using Domain.Entities.GDB.Enums;

namespace Domain.Entities.GDB
{
    public class GdbAgeRatingContentDescription
    {
        public GdbCategoryEnum Category { get; set; }
        public string Checksum { get; set; }
        public string Description { get; set; }
    }
}