namespace Domain.Entities
{
    public class GameStats
    {
        public int TotalFollowers { get; set; }
        public int TotalVotes { get; set; }
        public bool IsFollowing { get; set; }
        public int? Vote { get; set; }
    }
}