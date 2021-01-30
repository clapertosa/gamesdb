namespace Domain.Entities.GDB
{
    public class GdbAuthentication
    {
        public string AccessToken { get; set; }
        public double ExpiresIn { get; set; }
        public string TokenType { get; set; }
    }
}