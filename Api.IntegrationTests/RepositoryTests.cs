using Api.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.IntegrationTests
{
    [TestFixture]
    public class RepositoryTests
    {
        [Test]
        public void ShouldGetTournaments()
        {
            var sut = new TournamentRepository();

            var tournaments = sut.Retrieve();

            Assert.That(tournaments.Count, Is.GreaterThan(0));
        }
    }
}
