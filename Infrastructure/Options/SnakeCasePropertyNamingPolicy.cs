using System.Text.Json;

namespace Infrastructure.Options
{
    public class SnakeCasePropertyNamingPolicy : JsonNamingPolicy
    {
        public override string ConvertName(string name)
        {
            string result = "";
            for (int i = 0; i < name.Length; i++)
            {
                if (i == 0) result += char.ToLower(name[i]);
                else if (char.IsUpper(name[i]))
                {
                    result += $"_{char.ToLower(name[i])}";
                } else result += name[i];
            }

            return result;
        }
    }
}