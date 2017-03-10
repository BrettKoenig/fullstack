namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RestrictingSetOnColumns : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Standings", "Wins");
            DropColumn("dbo.Standings", "Losses");
            DropColumn("dbo.Standings", "PointsFor");
            DropColumn("dbo.Standings", "PointsAgainst");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Standings", "PointsAgainst", c => c.Int(nullable: false));
            AddColumn("dbo.Standings", "PointsFor", c => c.Int(nullable: false));
            AddColumn("dbo.Standings", "Losses", c => c.Int(nullable: false));
            AddColumn("dbo.Standings", "Wins", c => c.Int(nullable: false));
        }
    }
}
