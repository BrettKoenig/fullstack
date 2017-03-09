using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Standing
    {
        public int StandingId { get; set; }
        [ForeignKey("Team")]
        public int? TeamId { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public Decimal WinningPercentange
        {
            get
            {
                if ((Wins + Losses) > 0)
                {
                    return Wins / (Wins + Losses);
                }
                return 0;
            }
        }
        public int PointsFor { get; set; }
        public int PointsAgainst { get; set; }
        public int PointsDifferential { get; set; }
        public Division Division { get; set; }
        public int DivisionId { get; set; }
        public Tournament Tournament { get; set; }
        public int TournamentId { get; set; }

        public virtual Team Team { get; set; }
    }
}