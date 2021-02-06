namespace Domain.Entities.GDB
{
    public class GdbInvolvedCompanies
    {
        public int Id { get; set; } 
        public GdbCompany Company { get; set; } 
        public int CreatedAt { get; set; } 
        public bool Developer { get; set; } 
        public int Game { get; set; } 
        public bool Porting { get; set; } 
        public bool Publisher { get; set; } 
        public bool Supporting { get; set; } 
        public int UpdatedAt { get; set; } 
        public string Checksum { get; set; } 
    }
}