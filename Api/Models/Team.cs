using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Api.Models
{
    [DataContract(IsReference = true)]
    [JsonObject(IsReference = false)]
    public class Team
    {
        public int TeamId { get; set; }
        public string Name { get; set; }
        public string Coach { get; set; }
    }
}