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
    public class TournamentsController : ApiController
    {

        private readonly ITournamentRepository _tournamentRepository;

        public TournamentsController(ITournamentRepository tournamentRepository)
        {
            _tournamentRepository = tournamentRepository;
        }

        [ResponseType(typeof(Tournament))]
        // GET: api/Products
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(_tournamentRepository.Retrieve());
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [ResponseType(typeof(Tournament))]
        public IHttpActionResult Get(int id)
        {
            try
            {
                return Ok(_tournamentRepository.Retrieve(id));
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

    }
}
