using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities.GDB;

namespace Application.Interfaces
{
    public interface IGdb
    {
        public Task<List<GdbGame>> GetPopularGames();
        public Task<List<GdbGame>> GetTopRatedMonthGames();
        public Task<List<GdbGame>> GetBestEverGames();
    }
}