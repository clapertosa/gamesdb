using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities.GDB;

namespace Application.Interfaces
{
    public interface IGdb
    {
        public Task<List<GdbGame>> GetGames();
    }
}