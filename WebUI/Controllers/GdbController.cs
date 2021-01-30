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

        [HttpPost("get_games")]
        public async Task<IActionResult> GetGames()
        {
            return Ok(await _gdb.GetGames());
        }
    }
}