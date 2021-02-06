using System.Threading.Tasks;
using Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
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

        [AllowAnonymous]
        [HttpPost("get_popular_games")]
        public async Task<IActionResult> GetPopularGames()
        {
            return Ok(await _gdb.GetPopularGames());
        }
        
        [AllowAnonymous]
        [HttpPost("get_top_rated_month_games")]
        public async Task<IActionResult> GetTopRatedMonthGames()
        {
            return Ok(await _gdb.GetTopRatedMonthGames());
        }
        
        [AllowAnonymous]
        [HttpPost("get_best_ever_games")]
        public async Task<IActionResult> GetBestEverGames()
        {
            return Ok(await _gdb.GetBestEverGames());
        }
    }
}