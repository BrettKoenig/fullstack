using Api.Interfaces.Repositories;
using Api.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Data.Entity;

namespace Api.Repositories
{
    /// <summary>
    /// </summary>
    public class TournamentRepository : ITournamentRepository
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private ITeamRepository _teamRepository;

        public TournamentRepository(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        /// <summary>
        /// Retrieves the list of products.
        /// </summary>
        /// <returns></returns>
        public List<Tournament> Retrieve()
        {
            //return db.Tournaments.ToList();
            var tourney = db.Tournaments.ToList();
            return tourney;
        }

        public Tournament Retrieve(int id)
        {
            var tournament = db.Tournaments.Where(x => x.TournamentId == id).FirstOrDefault();
            if(tournament == null)
            {
                return new Tournament();
            }
            return tournament;
        }
        
    }
}