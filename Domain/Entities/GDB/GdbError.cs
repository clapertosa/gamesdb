namespace Domain.Entities.GDB
{
    public class GdbError
    {
        public string Title { get; set; }
        public int Status { get; set; }
        public string Cause { get; set; }
    }
}