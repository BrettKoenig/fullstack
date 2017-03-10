namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangingWinsLossesPointsForPointsAgainstToDbCalculatedFunctions : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Standings", "PointsDifferential");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Standings", "PointsDifferential", c => c.Int(nullable: false));
        }
    }
}
