using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Interfaces.Repositories
{
    public interface ITeamRepository
    {
        Team Retrieve(int id);
    }
}
