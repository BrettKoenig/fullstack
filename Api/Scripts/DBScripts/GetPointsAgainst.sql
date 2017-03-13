USE [Fullstack_Tournament]
GO

/****** Object:  UserDefinedFunction [OHR].[GetInventoryCount]    Script Date: 3/10/2017 2:29:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF EXISTS (SELECT * FROM   sys.columns WHERE  object_id = OBJECT_ID(N'[dbo].[Standings]') AND name = 'PointsAgainst')
BEGIN
	ALTER TABLE dbo.[Standings] 
	DROP COLUMN PointsAgainst
END
go

if (OBJECT_ID('dbo.GetPointsAgainst') is not null)
begin
	drop function dbo.GetPointsAgainst
end
go


CREATE function [dbo].[GetPointsAgainst](@TeamId int)
returns int
as
begin
	declare @ReturnValue1 int;

	select 
		@ReturnValue1 =
	coalesce((select SUM(Team1Score) as count1 from dbo.Games where Team2Id = @TeamId), 0) + 
	coalesce((select SUM(Team2Score) as count2 from dbo.Games where Team1Id = @TeamId), 0)
	
	return @ReturnValue1
end
GO

alter table [dbo].[Standings]
add PointsAgainst as  [dbo].[GetPointsAgainst](TeamId)
go

