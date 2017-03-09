using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models
{
    public class Game
    {
        public int GameId { get; set; }
        public int LocationId { get; set; }
        [ForeignKey("Team1")]
        public int? Team1Id { get; set; }
        [ForeignKey("Team2")]
        public int? Team2Id { get; set; }
        public int Team1Score { get; set; }
        public int Team2Score { get; set; }
        public DateTime Time { get; set; }
        public int TournamentId { get; set; }


        public virtual Location Location { get; set; }
        public virtual Team Team1 { get; set; }
        public virtual Team Team2 { get; set; }
        public virtual Tournament Tournament { get; set; }
    }
}