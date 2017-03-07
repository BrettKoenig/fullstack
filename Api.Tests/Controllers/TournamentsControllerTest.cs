using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Api;
using Api.Controllers;
using Api.Interfaces.Repositories;
using Moq;
using System.Web.Http.Results;
using Api.Models;

namespace Api.Tests.Controllers
{
    [TestClass]
    public class TournamentsControllerTests
    {

        [TestMethod]
        public void TournamentsControllerGet()
        {
            // Arrange
            Mock<ITournamentRepository> _mockTournamentRepository = new Mock<ITournamentRepository>();
            _mockTournamentRepository.Setup(x => x.Retrieve()).Returns(new List<Tournament>{
                new Tournament { Name = "Hello", TournamentId = 1}, 
                new Tournament { Name = "Tournament 2", TournamentId = 2 }
            });
           TournamentsController controller = new TournamentsController(_mockTournamentRepository.Object);

            // Act
            IHttpActionResult result = controller.Get() as IHttpActionResult;

            // Assert
            Assert.IsNotNull(result);
            //Assert.AreEqual(2, result.Count());
            //Assert.AreEqual("value1", result.ElementAt(0));
            //Assert.AreEqual("value2", result.ElementAt(1));
        }
        
    }
}
