using System.Threading.Tasks;
using Application.Mediatr.Game.Commands;
using Application.Mediatr.Game.Queries;
using Domain.Entities;
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

        [HttpPost("unfollow")]
        public async Task<ActionResult<Unit>> RemoveFollower(UnfollowGameCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPost("vote")]
        public async Task<ActionResult<Unit>> Vote(VoteGameCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPost("get_game_stats")]
        public async Task<GameStats> GetGameStats(GameStatsQuery query)
        {
            return await Mediator.Send(query);
        }
    }
}