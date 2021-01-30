using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities.GDB;
using Infrastructure.Options;

namespace Infrastructure.Services
{
    public class Gdb : IGdb
    {
        private const string ClientName = "GDB";
        private readonly IHttpClientFactory _httpClientFactory;

        private readonly JsonSerializerOptions _options = new JsonSerializerOptions
            {PropertyNamingPolicy = new SnakeCasePropertyNamingPolicy()};

        public Gdb(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        private HttpClient GetClient() => _httpClientFactory.CreateClient(ClientName);

        public async Task<List<GdbGame>> GetGames()
        {
            HttpClient client = GetClient();
            HttpResponseMessage res = await client.PostAsync("games", new StringContent("fields *;"));
            string resContentString = await res.Content.ReadAsStringAsync();
            List<GdbGame> games = JsonSerializer.Deserialize<List<GdbGame>>(resContentString, _options);
            return games;
        }
    }
}