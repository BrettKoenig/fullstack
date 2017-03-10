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
        public int Wins { get; }
        public int Losses { get; }
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
        public int PointsFor { get; }
        public int PointsAgainst { get; }

        public int PointsDifferential
        {
            get
            {
                return PointsFor - PointsAgainst;
            }
        }

        public int DivisionId { get; set; }
        public int TournamentId { get; set; }

        public virtual Team Team { get; set; }
        public virtual Tournament Tournament { get; set; }
        public virtual Division Division { get; set; }
    }
}