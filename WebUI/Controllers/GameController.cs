using System.Threading.Tasks;
using Application.Mediatr.Game.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class GameController : BaseController
    {
        [HttpPost("follow")]
        public async Task<ActionResult<Unit>> AddFollower(FollowGameCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}