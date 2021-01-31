using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Application.Errors;
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

        public async Task<List<GdbGame>> GetPopularGames()
        {
            string query =
                $"f *; where release_dates.date > {DateTime.Now.AddMonths(-1).Millisecond} & rating >= 75; sort rating desc; limit 20;";
            HttpClient client = GetClient();
            HttpResponseMessage res = await client.PostAsync("games", new StringContent(query));
            string resContentString = await res.Content.ReadAsStringAsync();
            if (!res.IsSuccessStatusCode)
            {
                throw new RestException(res.StatusCode, JsonSerializer.Deserialize<List<GdbError>>(resContentString, _options));
            }

            List<GdbGame> games = JsonSerializer.Deserialize<List<GdbGame>>(resContentString, _options);
            return games;
        }
    }
}