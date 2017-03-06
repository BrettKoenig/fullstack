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
        public Double Latitude { get; set; }
        public Double Longitude { get; set; }
    }
}