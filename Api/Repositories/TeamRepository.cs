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
    public class TeamRepository : ITeamRepository
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public Team Retrieve(int id)
        {
            var team = db.Teams.Where(x => x.TeamId == id).FirstOrDefault();
            if(team == null)
            {
                return new Team();
            }
            return team;
        }
        
    }
}