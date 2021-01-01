using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace WebUI.Controllers
{
    public class UserController : BaseController
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        [HttpGet]
        public string Index()
        {
            return _configuration["IGDB_CLIENT_ID"];
        }
    }
}