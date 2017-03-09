using Api.Interfaces.Repositories;
using Api.Models;
using Api.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace Api.Controllers
{
    public class TeamsController : ApiController
    {

        private readonly ITeamRepository _teamRepository;

        public TeamsController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        [ResponseType(typeof(Team))]
        // GET: api/Products
        public IHttpActionResult Get(int id)
        {
            try
            {
                var team = _teamRepository.Retrieve(id);
                return Ok(team);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        //[ResponseType(typeof(Team))]
        //public IHttpActionResult GetTeamsInTournament(int id)
        //{
        //    try
        //    {
        //        return Ok(_tournamentRepository.GetTeamsInTournament(id));
        //    }
        //    catch(Exception e)
        //    {
        //        return InternalServerError(e);
        //    }
        //}
        
    }
}
