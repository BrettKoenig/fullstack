using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Game
    {
        public int GameId { get; set; }
        public Location Location { get; set; }
        public int LocationId { get; set; }
        public Team Team1 { get; set; }
        public int Team1Id { get; set; }
        public Team Team2 { get; set; }
        public int Team2Id { get; set; }
        public int Team1Score { get; set; }
        public int Team2Score { get; set; }
        public DateTime Time { get; set; }
    }
}