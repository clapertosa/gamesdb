namespace Application.Interfaces
{
    public interface IUserAccessor
    {
        string GetCurrentUsername();
        string GetCurrentProfileId();
    }
}