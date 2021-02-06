namespace Domain.Entities.GDB
{
    public class GdbReleaseDates
    {
        public int Id { get; set; } 
        public int Category { get; set; } 
        public int CreatedAt { get; set; } 
        public int Date { get; set; } 
        public int Game { get; set; } 
        public string Human { get; set; } 
        public int M { get; set; } 
        public int Platform { get; set; } 
        public int Region { get; set; } 
        public int UpdatedAt { get; set; } 
        public int Y { get; set; } 
        public string Checksum { get; set; } 
    }
}