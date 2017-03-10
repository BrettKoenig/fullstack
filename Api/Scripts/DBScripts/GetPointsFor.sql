USE [Fullstack_Tournament]
GO

/****** Object:  UserDefinedFunction [OHR].[GetInventoryCount]    Script Date: 3/10/2017 2:29:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE function [dbo].[GetPointsFor](@TeamId int)
returns int
as
begin
	declare @ReturnValue1 int;

	select 
		@ReturnValue1 =
	coalesce((select SUM(Team1Score) as count1 from dbo.Games where Team1Id = @TeamId), 0) + 
	coalesce((select SUM(Team2Score) as count2 from dbo.Games where Team2Id = @TeamId), 0)
	
	return @ReturnValue1
end

GO

alter table [dbo].[Standings]
drop column PointsFor
go

alter table [dbo].[Standings]
add PointsFor as  [dbo].[GetPointsFor](TeamId)
go

