namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class makingTeamIdNullableForStanding : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Standings", "TeamId", "dbo.Teams");
            DropIndex("dbo.Standings", new[] { "TeamId" });
            AlterColumn("dbo.Standings", "TeamId", c => c.Int());
            CreateIndex("dbo.Standings", "TeamId");
            AddForeignKey("dbo.Standings", "TeamId", "dbo.Teams", "TeamId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Standings", "TeamId", "dbo.Teams");
            DropIndex("dbo.Standings", new[] { "TeamId" });
            AlterColumn("dbo.Standings", "TeamId", c => c.Int(nullable: false));
            CreateIndex("dbo.Standings", "TeamId");
            AddForeignKey("dbo.Standings", "TeamId", "dbo.Teams", "TeamId", cascadeDelete: true);
        }
    }
}
