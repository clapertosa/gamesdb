using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities.GDB;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Options
{
    public class HttpContextMiddleware : DelegatingHandler
    {
        private readonly JsonSerializerOptions _options = new JsonSerializerOptions
            {PropertyNamingPolicy = new SnakeCasePropertyNamingPolicy()};

        private readonly IDistributedCache _distributedCache;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public HttpContextMiddleware(IDistributedCache distributedCache, IHttpClientFactory httpClientFactory,
            IConfiguration configuration)
        {
            _distributedCache = distributedCache;
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        private async Task<string> GetGdbToken(CancellationToken cancellationToken)
        {
            string gdbToken = await _distributedCache.GetStringAsync("gdb-token", cancellationToken);
            if (gdbToken == null)
            {
                HttpClient client = _httpClientFactory.CreateClient("OAUTH");
                string resContentString = await client.PostAsync(
                    $"?client_id={_configuration["IGDB_CLIENT_ID"]}&client_secret={_configuration["IGDB_CLIENT_SECRET"]}&grant_type=client_credentials",
                    null!, cancellationToken).Result.Content.ReadAsStringAsync(cancellationToken);
                GdbAuthentication gdbResponse =
                    JsonSerializer.Deserialize<GdbAuthentication>(resContentString, _options);
                if (gdbResponse != null)
                {
                    gdbResponse.TokenType =
                        $"{char.ToUpper(gdbResponse.TokenType[0])}{gdbResponse.TokenType.Substring(1)}";
                    await _distributedCache.SetAsync("gdb-token",
                        Encoding.UTF8.GetBytes($"{gdbResponse.TokenType} {gdbResponse.AccessToken}".Trim()),
                        new DistributedCacheEntryOptions
                        {
                            AbsoluteExpiration = DateTime.Now.AddSeconds(gdbResponse.ExpiresIn)
                        }, cancellationToken);
                    gdbToken = $"{gdbResponse.TokenType} {gdbResponse.AccessToken}".Trim();
                }
            }

            return gdbToken;
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
            CancellationToken cancellationToken)
        {
            // Get GamesDB access token and set Headers
            string gdbToken = await GetGdbToken(cancellationToken);
            request.Headers.Add("Client-ID", _configuration["IGDB_CLIENT_ID"]);
            request.Headers.Add("Authorization", gdbToken);

            return await base.SendAsync(request, cancellationToken);
        }
    }
}