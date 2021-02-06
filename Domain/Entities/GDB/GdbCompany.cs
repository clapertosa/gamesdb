namespace Domain.Entities.GDB
{
    public class GdbCompany
    {
        public int Id { get; set; } 
        public int ChangeDateCategory { get; set; } 
        public int CreatedAt { get; set; } 
        public string Name { get; set; } 
        public string Slug { get; set; } 
        public int StartDateCategory { get; set; } 
        public int UpdatedAt { get; set; } 
        public string Url { get; set; } 
        public string Checksum { get; set; } 
    }
}