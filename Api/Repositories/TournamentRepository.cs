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
    public class TournamentRepository
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        /// <summary>
        /// Retrieves the list of products.
        /// </summary>
        /// <returns></returns>
        internal List<Tournament> Retrieve()
        {
            return db.Tournaments.ToList();
        }
    }
}