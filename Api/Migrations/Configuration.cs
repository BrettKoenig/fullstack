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
                new Tournament { TournamentId = 4, Name = "March Madness Tournament" }
            );

            context.Games.AddOrUpdate(
                g => g.GameId,
                new Game { GameId = 1, LocationId = 4, Team1Id = 7, Team2Id = 10, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 2, LocationId = 2, Team1Id = 3, Team2Id = 4, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 3, LocationId = 3, Team1Id = 6, Team2Id = 11, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 4, LocationId = 1, Team1Id = 2, Team2Id = 5, Time = new DateTime(2016, 7, 16, 8, 0, 0), TournamentId = 1 },
                new Game { GameId = 5, LocationId = 3, Team1Id = 13, Team2Id = 16, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 6, LocationId = 2, Team1Id = 12, Team2Id = 17, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 7, LocationId = 1, Team1Id = 8, Team2Id = 9, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 8, LocationId = 4, Team1Id = 14, Team2Id = 15, Time = new DateTime(2016, 7, 16, 9, 0, 0), TournamentId = 1 },
                new Game { GameId = 9, LocationId = 2, Team1Id = 2, Team2Id = 3, Time = new DateTime(2016, 7, 16, 10, 0, 0), TournamentId = 1 },
                new Game { GameId = 10, LocationId = 1, Team1Id = 1, Team2Id = 5, Time = new DateTime(2016, 7, 16, 10, 0, 0), TournamentId = 1 },
                new Game { GameId = 11, LocationId = 3, Team1Id = 6, Team2Id = 10, Time = new DateTime(2016, 7, 16, 10, 0, 0), TournamentId = 1 },
                new Game { GameId = 12, LocationId = 3, Team1Id = 12, Team2Id = 16, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 13, LocationId = 4, Team1Id = 17, Team2Id = 15, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 14, LocationId = 2, Team1Id = 7, Team2Id = 8, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 15, LocationId = 1, Team1Id = 11, Team2Id = 9, Time = new DateTime(2016, 7, 16, 11, 0, 0), TournamentId = 1 },
                new Game { GameId = 16, LocationId = 2, Team1Id = 1, Team2Id = 4, Time = new DateTime(2016, 7, 16, 12, 0, 0), TournamentId = 1 },
                new Game { GameId = 17, LocationId = 1, Team1Id = 13, Team2Id = 14, Time = new DateTime(2016, 7, 16, 12, 0, 0), TournamentId = 1 },
                new Game { GameId = 18, LocationId = 3, Team1Id = 5, Team2Id = 3, Time = new DateTime(2016, 7, 16, 12, 0, 0), TournamentId = 1 },
                new Game { GameId = 19, LocationId = 1, Team1Id = 6, Team2Id = 9, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 20, LocationId = 4, Team1Id = 12, Team2Id = 15, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 21, LocationId = 3, Team1Id = 11, Team2Id = 7, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 22, LocationId = 2, Team1Id = 10, Team2Id = 8, Time = new DateTime(2016, 7, 16, 13, 0, 0), TournamentId = 1 },
                new Game { GameId = 23, LocationId = 1, Team1Id = 16, Team2Id = 14, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 24, LocationId = 4, Team1Id = 4, Team2Id = 2, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 25, LocationId = 3, Team1Id = 1, Team2Id = 3, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 26, LocationId = 2, Team1Id = 17, Team2Id = 13, Time = new DateTime(2016, 7, 16, 14, 0, 0), TournamentId = 1 },
                new Game { GameId = 27, LocationId = 2, Team1Id = 9, Team2Id = 7, Time = new DateTime(2016, 7, 16, 15, 0, 0), TournamentId = 1 },
                new Game { GameId = 28, LocationId = 3, Team1Id = 10, Team2Id = 11, Time = new DateTime(2016, 7, 16, 15, 0, 0), TournamentId = 1 },
                new Game { GameId = 29, LocationId = 1, Team1Id = 6, Team2Id = 8, Time = new DateTime(2016, 7, 16, 15, 0, 0), TournamentId = 1 },
                new Game { GameId = 30, LocationId = 2, Team1Id = 15, Team2Id = 13, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 31, LocationId = 3, Team1Id = 16, Team2Id = 17, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 32, LocationId = 4, Team1Id = 1, Team2Id = 2, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 33, LocationId = 1, Team1Id = 12, Team2Id = 14, Time = new DateTime(2016, 7, 16, 16, 0, 0), TournamentId = 1 },
                new Game { GameId = 34, LocationId = 1, Team1Id = 4, Team2Id = 5, Time = new DateTime(2016, 7, 16, 17, 0, 0), TournamentId = 1 }
                );

            context.Locations.AddOrUpdate(
                l => l.LocationId,
                new Location { LocationId = 1, Name = "Meadowbrook Ct. 1", Latitude = 39.248958, Longitude = -76.822041 },
                new Location { LocationId = 2, Name = "Meadowbrook Ct. 2", Latitude = 39.248958, Longitude = -76.822041 },
                new Location { LocationId = 3, Name = "Meadowbrook Ct. 3", Latitude = 39.248958, Longitude = -76.822041 },
                new Location { LocationId = 4, Name = "Meadowbrook Ct. 4", Latitude = 39.248958, Longitude = -76.822041 }
                );

            context.Teams.AddOrUpdate(
                t => t.TeamId,
                new Team { TeamId = 1, Name = "Baltimore Stars", Coach = "James" },
                new Team { TeamId = 2, Name = "DC Assault", Coach = "Bartlett" },
                new Team { TeamId = 3, Name = "MADE Elite", Coach = "Johnson" },
                new Team { TeamId = 4, Name = "Reistertown Wolfpack", Coach = "Hightower" },
                new Team { TeamId = 5, Name = "Sharks", Coach = "Smith" },
                new Team { TeamId = 6, Name = "Baltimore Supreme", Coach = "Miller" },
                new Team { TeamId = 7, Name = "DC Premier", Coach = "Davis" },
                new Team { TeamId = 8, Name = "HC Elite", Coach = "Michelotti" },
                new Team { TeamId = 9, Name = "Maryland 3D", Coach = "Brown" },
                new Team { TeamId = 10, Name = "Severn Elite", Coach = "Wilson" },
                new Team { TeamId = 11, Name = "Team Takeover", Coach = "Williams" },
                new Team { TeamId = 12, Name = "6th Man Warriors", Coach = "White" },
                new Team { TeamId = 13, Name = "E-City Ballers", Coach = "Moore" },
                new Team { TeamId = 14, Name = "Force Attack", Coach = "Taylor" },
                new Team { TeamId = 15, Name = "Maryland Playmakers", Coach = "Jackson" },
                new Team { TeamId = 16, Name = "Savage Eagles", Coach = "Anderson" },
                new Team { TeamId = 17, Name = "Team Glory", Coach = "Thomas" }
                );


            context.Standings.AddOrUpdate(
                s => s.StandingId,
                new Standing { StandingId = 1, TeamId = 1, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 2, TeamId = 2, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 3, TeamId = 3, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 4, TeamId = 4, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 5, TeamId = 5, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 1, TournamentId = 1 },
                new Standing { StandingId = 6, TeamId = 6, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 7, TeamId = 7, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 8, TeamId = 8, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 9, TeamId = 9, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 10, TeamId = 10, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 11, TeamId = 11, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 2, TournamentId = 1 },
                new Standing { StandingId = 12, TeamId = 12, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 13, TeamId = 13, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 14, TeamId = 14, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 15, TeamId = 15, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 16, TeamId = 16, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 },
                new Standing { StandingId = 17, TeamId = 17, Wins = 0, Losses = 0, PointsFor = 0, PointsAgainst = 0, DivisionId = 3, TournamentId = 1 }
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
