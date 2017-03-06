using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Standing
    {
        public int StandingId { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public Decimal WinningPercentange
        {
            get
            {
                return Wins / (Wins + Losses);
            }
        }
        public int PointsFor { get; set; }
        public int PointsAgainst { get; set; }
        public int PointsDifferential { get; set; }
        public Division Division { get; set; }
        public int DivisionId { get; set; }
        public Tournament Tournament { get; set; }
        public int TournamentId { get; set; }
    }
}