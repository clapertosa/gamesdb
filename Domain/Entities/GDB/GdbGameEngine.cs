using System.Collections.Generic;

namespace Domain.Entities.GDB
{
    public class GdbGameEngine
    {
        public int Id { get; set; } 
        public List<int> Companies { get; set; } 
        public int CreatedAt { get; set; } 
        public int Logo { get; set; } 
        public string Name { get; set; } 
        public string Slug { get; set; } 
        public int UpdatedAt { get; set; } 
        public string Url { get; set; } 
        public string Checksum { get; set; } 
    }
}