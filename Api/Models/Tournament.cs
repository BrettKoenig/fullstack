using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Tournament
    {
        public int TournamentId { get; set; }
        public string Name { get; set; }
        public List<Game> Games { get; set; }
        public List<Standing> Standings { get; set; }
    }
}