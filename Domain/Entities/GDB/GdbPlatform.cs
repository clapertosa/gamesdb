using System.Collections.Generic;

namespace Domain.Entities.GDB
{
    public class GdbPlatform
    {
        public int Id { get; set; } 
        public string Abbreviation { get; set; } 
        public string AlternativeName { get; set; } 
        public int Category { get; set; } 
        public int CreatedAt { get; set; } 
        public string Name { get; set; } 
        public int PlatformLogo { get; set; } 
        public string Slug { get; set; } 
        public int UpdatedAt { get; set; } 
        public string Url { get; set; } 
        public List<int> Versions { get; set; } 
        public List<int> Websites { get; set; } 
        public string Checksum { get; set; } 
    }
}