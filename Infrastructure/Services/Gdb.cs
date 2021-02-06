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
                $"f *, cover.*, genres.*, release_dates.*;" +
                $" where first_release_date > {DateTimeOffset.Now.AddMonths(-5).ToUnixTimeSeconds()} & rating >= 80 & total_rating_count >= 5;" +
                $" sort popularity desc;" +
                $" limit 20;";
            HttpClient client = GetClient();
            HttpResponseMessage res = await client.PostAsync("games", new StringContent(query));
            string resContentString = await res.Content.ReadAsStringAsync();
            if (!res.IsSuccessStatusCode)
            {
                throw new RestException(res.StatusCode,
                    JsonSerializer.Deserialize<List<GdbError>>(resContentString, _options));
            }

            List<GdbGame> games = JsonSerializer.Deserialize<List<GdbGame>>(resContentString, _options);
            return games;
        }

        public async Task<List<GdbGame>> GetTopRatedMonthGames()
        {
            string query =
                $"f *, cover.*, genres.*, release_dates.*;" +
                $" where first_release_date > {DateTimeOffset.Now.AddMonths(-1).ToUnixTimeSeconds()} & total_rating_count >= 5;" +
                $" sort rating desc;" +
                $" limit 20;";
            HttpClient client = GetClient();
            HttpResponseMessage res = await client.PostAsync("games", new StringContent(query));
            string resContentString = await res.Content.ReadAsStringAsync();
            if (!res.IsSuccessStatusCode)
            {
                throw new RestException(res.StatusCode,
                    JsonSerializer.Deserialize<List<GdbError>>(resContentString, _options));
            }

            List<GdbGame> games = JsonSerializer.Deserialize<List<GdbGame>>(resContentString, _options);
            return games;
        }

        public async Task<List<GdbGame>> GetBestEverGames()
        {
            string query =
                $"f *, cover.*, genres.*, release_dates.*;" +
                $" where total_rating_count >= 5 & rating > 80 & total_rating_count > 500;" +
                $" sort popularity desc;" +
                $" limit 20;";
            HttpClient client = GetClient();
            HttpResponseMessage res = await client.PostAsync("games", new StringContent(query));
            string resContentString = await res.Content.ReadAsStringAsync();
            if (!res.IsSuccessStatusCode)
            {
                throw new RestException(res.StatusCode,
                    JsonSerializer.Deserialize<List<GdbError>>(resContentString, _options));
            }

            List<GdbGame> games = JsonSerializer.Deserialize<List<GdbGame>>(resContentString, _options);
            return games;
        }
    }
}