namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovingUnneccessaryDocs : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Products");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ProductCode = c.String(nullable: false),
                        ProductName = c.String(nullable: false, maxLength: 12),
                        ReleaseDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId);
            
        }
    }
}
