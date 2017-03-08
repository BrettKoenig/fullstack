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

        [Test]
        public void ShouldGetOneTournament()
        {
            var sut = new TournamentRepository();
            var tournament = sut.Retrieve(1);

            Assert.That(tournament, Is.Not.Null);
            Assert.That(tournament.TournamentId, Is.EqualTo(1));
        }


    }
}
