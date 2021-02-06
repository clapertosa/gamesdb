namespace Domain.Entities.GDB
{
    public class GdbSimilarGame
    {
        public int Id { get; set; }
        public GdbCover Cover { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
    }
}