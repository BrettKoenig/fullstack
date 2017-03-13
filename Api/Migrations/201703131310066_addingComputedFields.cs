namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingComputedFields : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Standings", "Wins", c => c.Int(nullable: false));
            AddColumn("dbo.Standings", "Losses", c => c.Int(nullable: false));
            AddColumn("dbo.Standings", "PointsFor", c => c.Int(nullable: false));
            AddColumn("dbo.Standings", "PointsAgainst", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Standings", "PointsAgainst");
            DropColumn("dbo.Standings", "PointsFor");
            DropColumn("dbo.Standings", "Losses");
            DropColumn("dbo.Standings", "Wins");
        }
    }
}
