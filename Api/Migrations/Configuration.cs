namespace Api.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Api.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Api.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Tournaments.AddOrUpdate(
    t => t.Name,
    new Tournament { TournamentId = 1, Name = "Cager Classic" },
    new Tournament { TournamentId = 2, Name = "Holiday Hoops Challenge" },
    new Tournament { TournamentId = 3, Name = "Summer Showdown" },
    new Tournament { TournamentId = 4, Name = "March Madness Tournament" });

            context.Games.AddOrUpdate(
                g => g.GameId,
                new Game { GameId = 7969, LocationId = 4, Team1Id = 825, Team2Id = 821, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 7970, LocationId = 2, Team1Id = 828, Team2Id = 826, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 7971, LocationId = 3, Team1Id = 813, Team2Id = 818, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 7972, LocationId = 1, Team1Id = 814, Team2Id = 817, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 7973, LocationId = 3, Team1Id = 816, Team2Id = 820, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 7974, LocationId = 2, Team1Id = 823, Team2Id = 819, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 7975, LocationId = 1, Team1Id = 822, Team2Id = 827, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 7976, LocationId = 4, Team1Id = 815, Team2Id = 824, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 7977, LocationId = 2, Team1Id = 814, Team2Id = 828, Time = new DateTime(2016, 7, 16, 10, 0, 0), TournamentId = 1 },
                new Game { GameId = 7978, LocationId = 1, Team1Id = 812, Team2Id = 817, Time = new DateTime(2016, 7, 16, 10, 0, 0), TournamentId = 1 },
                new Game { GameId = 7979, LocationId = 3, Team1Id = 813, Team2Id = 821, Time = new DateTime(2016, 7, 16, 10, 0, 0), TournamentId = 1 },
                new Game { GameId = 7980, LocationId = 3, Team1Id = 823, Team2Id = 820, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 7981, LocationId = 4, Team1Id = 819, Team2Id = 824, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 7982, LocationId = 2, Team1Id = 825, Team2Id = 822, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 7983, LocationId = 1, Team1Id = 818, Team2Id = 827, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 7984, LocationId = 2, Team1Id = 812, Team2Id = 826, Time = new DateTime(2016, 7, 16, 12, 0, 0), TournamentId = 1 },
                new Game { GameId = 7989, LocationId = 1, Team1Id = 816, Team2Id = 815, Time = new DateTime(2016, 7, 16, 12, 0, 0), TournamentId = 1 },
                new Game { GameId = 7990, LocationId = 3, Team1Id = 817, Team2Id = 828, Time = new DateTime(2016, 7, 16, 12, 0, 0), TournamentId = 1 },
                new Game { GameId = 7991, LocationId = 1, Team1Id = 813, Team2Id = 827, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 7993, LocationId = 4, Team1Id = 823, Team2Id = 824, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 7986, LocationId = 3, Team1Id = 818, Team2Id = 825, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 7987, LocationId = 2, Team1Id = 821, Team2Id = 822, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 7988, LocationId = 1, Team1Id = 820, Team2Id = 815, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 7994, LocationId = 4, Team1Id = 826, Team2Id = 814, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 7992, LocationId = 3, Team1Id = 812, Team2Id = 828, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 7985, LocationId = 2, Team1Id = 819, Team2Id = 816, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 7995, LocationId = 2, Team1Id = 827, Team2Id = 825, Time = new DateTime(2016, 7, 16, 15, 0, 0), TournamentId = 1 },
                new Game { GameId = 7997, LocationId = 3, Team1Id = 821, Team2Id = 818, Time = new DateTime(2016, 7, 16, 15, 0, 0), TournamentId = 1 },
                new Game { GameId = 7998, LocationId = 1, Team1Id = 813, Team2Id = 822, Time = new DateTime(2016, 7, 16, 15, 0, 0), TournamentId = 1 },
                new Game { GameId = 7999, LocationId = 2, Team1Id = 824, Team2Id = 816, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 8000, LocationId = 3, Team1Id = 820, Team2Id = 819, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 8002, LocationId = 4, Team1Id = 812, Team2Id = 814, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 7996, LocationId = 1, Team1Id = 823, Team2Id = 815, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 8001, LocationId = 1, Team1Id = 826, Team2Id = 817, Time = new DateTime(2016, 7, 16, 17, 0, 0), TournamentId = 1 }
                );

            context.Locations.AddOrUpdate(
                l => l.LocationId,
                new Location { LocationId = 1, Name = "Meadowbrook Ct. 1", Latitude = 39.248958, Longitude = -76.822041 },
                new Location { LocationId = 2, Name = "Meadowbrook Ct. 2", Latitude = 39.248958, Longitude = -76.822041 },
                new Location { LocationId = 3, Name = "Meadowbrook Ct. 3", Latitude = 39.248958, Longitude = -76.822041 },
                new Location { LocationId = 4, Name = "Meadowbrook Ct. 4", Latitude = 39.248958, Longitude = -76.822041 }
                );

            context.Standings.AddOrUpdate(
                s => s.StandingId,
                new Standing { StandingId = 1, TeamId = 812, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 814, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 828, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 826, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 817, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 813, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 825, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 822, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 827, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 821, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 818, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 823, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 816, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 815, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 824, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 820, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 1, TeamId = 819, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 }
                );

            context.Teams.AddOrUpdate(
                t => t.TeamId,
                new Team { TeamId = 812, Name = "Baltimore Stars", Coach = "James" },
                new Team { TeamId = 814, Name = "DC Assault", Coach = "Bartlett" },
                new Team { TeamId = 828, Name = "MADE Elite", Coach = "Johnson" },
                new Team { TeamId = 826, Name = "Reistertown Wolfpack", Coach = "Hightower" },
                new Team { TeamId = 817, Name = "Sharks", Coach = "Smith" },
                new Team { TeamId = 813, Name = "Baltimore Supreme", Coach = "Miller" },
                new Team { TeamId = 825, Name = "DC Premier", Coach = "Davis" },
                new Team { TeamId = 822, Name = "HC Elite", Coach = "Michelotti" },
                new Team { TeamId = 827, Name = "Maryland 3D", Coach = "Brown" },
                new Team { TeamId = 821, Name = "Severn Elite", Coach = "Wilson" },
                new Team { TeamId = 818, Name = "Team Takeover", Coach = "Williams" },
                new Team { TeamId = 823, Name = "6th Man Warriors", Coach = "White" },
                new Team { TeamId = 816, Name = "E-City Ballers", Coach = "Moore" },
                new Team { TeamId = 815, Name = "Force Attack", Coach = "Taylor" },
                new Team { TeamId = 824, Name = "Maryland Playmakers", Coach = "Jackson" },
                new Team { TeamId = 820, Name = "Savage Eagles", Coach = "Anderson" },
                new Team { TeamId = 819, Name = "Team Glory", Coach = "Thomas" }
                );

            context.Divisions.AddOrUpdate(
                d => d.DivisionId,
                new Division { DivisionId = 1, Name = "6th Grade" },
                new Division { DivisionId = 2, Name = "7th Grade" },
                new Division { DivisionId = 3, Name = "8th Grade" }
                );
        }
    }
}
