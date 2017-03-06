namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingTournamentReferenceToGameAndStandings : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Games", "Tournament_TournamentId", "dbo.Tournaments");
            DropForeignKey("dbo.Standings", "Tournament_TournamentId", "dbo.Tournaments");
            DropIndex("dbo.Games", new[] { "Tournament_TournamentId" });
            DropIndex("dbo.Standings", new[] { "Tournament_TournamentId" });
            RenameColumn(table: "dbo.Games", name: "Tournament_TournamentId", newName: "TournamentId");
            RenameColumn(table: "dbo.Standings", name: "Tournament_TournamentId", newName: "TournamentId");
            AlterColumn("dbo.Games", "TournamentId", c => c.Int(nullable: false));
            AlterColumn("dbo.Locations", "Latitude", c => c.Double(nullable: false));
            AlterColumn("dbo.Locations", "Longitude", c => c.Double(nullable: false));
            AlterColumn("dbo.Standings", "TournamentId", c => c.Int(nullable: false));
            CreateIndex("dbo.Games", "TournamentId");
            CreateIndex("dbo.Standings", "TournamentId");
            AddForeignKey("dbo.Games", "TournamentId", "dbo.Tournaments", "TournamentId", cascadeDelete: true);
            AddForeignKey("dbo.Standings", "TournamentId", "dbo.Tournaments", "TournamentId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Standings", "TournamentId", "dbo.Tournaments");
            DropForeignKey("dbo.Games", "TournamentId", "dbo.Tournaments");
            DropIndex("dbo.Standings", new[] { "TournamentId" });
            DropIndex("dbo.Games", new[] { "TournamentId" });
            AlterColumn("dbo.Standings", "TournamentId", c => c.Int());
            AlterColumn("dbo.Locations", "Longitude", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AlterColumn("dbo.Locations", "Latitude", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AlterColumn("dbo.Games", "TournamentId", c => c.Int());
            RenameColumn(table: "dbo.Standings", name: "TournamentId", newName: "Tournament_TournamentId");
            RenameColumn(table: "dbo.Games", name: "TournamentId", newName: "Tournament_TournamentId");
            CreateIndex("dbo.Standings", "Tournament_TournamentId");
            CreateIndex("dbo.Games", "Tournament_TournamentId");
            AddForeignKey("dbo.Standings", "Tournament_TournamentId", "dbo.Tournaments", "TournamentId");
            AddForeignKey("dbo.Games", "Tournament_TournamentId", "dbo.Tournaments", "TournamentId");
        }
    }
}
