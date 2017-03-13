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
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int Wins { get; private set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int Losses { get; private set; }
        public string WinningPercentage
        {
            get
            {
                if ((Wins + Losses) > 0)
                {
                    return string.Format("{0:0.000}", (double)Wins / (double)(Wins + Losses));
                }
                return "0.00";
            }
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int PointsFor { get; private set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int PointsAgainst { get; private set; }

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