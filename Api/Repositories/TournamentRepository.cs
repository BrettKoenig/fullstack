using Api.Interfaces.Repositories;
using Api.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace Api.Repositories
{
    /// <summary>
    /// </summary>
    public class TournamentRepository : ITournamentRepository
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        /// <summary>
        /// Retrieves the list of products.
        /// </summary>
        /// <returns></returns>
        public List<Tournament> Retrieve()
        {
            return db.Tournaments.ToList();
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

        //public List<Team> GetTeamsInTournament(int id)
        //{
        //    List<Team> teams = new List<Team>();
        //    foreach(var game in Retrieve(id).Games)
        //    {
        //        teams.Add(game.Team1);
        //        teams.Add(game.Team2);
        //    }
        //    return teams;
        //}
    }
}