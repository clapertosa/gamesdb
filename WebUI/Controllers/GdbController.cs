using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class GdbController : BaseController
    {
        private readonly IGdb _gdb;

        public GdbController(IGdb gdb)
        {
            _gdb = gdb;
        }

        [HttpPost("get_popular_games")]
        public async Task<IActionResult> GetPopularGames()
        {
            
            return Ok(await _gdb.GetPopularGames());
        }
    }
}