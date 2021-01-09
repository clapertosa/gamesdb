namespace Application.Interfaces
{
    public interface IJwt
    {
        public string CreateToken(string username);
    }
}