using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Location
    {
        public int LocationId { get; set; }
        public string Name { get; set; }
        public Decimal Latitude { get; set; }
        public Decimal Longitude { get; set; }
    }
}