USE [Fullstack_Tournament]
GO

/****** Object:  UserDefinedFunction [OHR].[GetInventoryCount]    Script Date: 3/10/2017 2:29:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[Standings]') AND name = 'Wins')
BEGIN
	ALTER TABLE [dbo].[Standings]
	DROP COLUMN Wins
END
go

if (OBJECT_ID('dbo.GetWins') is not null)
begin
	drop function dbo.GetWins
end
go



CREATE function [dbo].[GetWins](@TeamId int)
returns int
as
begin
	declare @ReturnValue1 int;

	select 
		@ReturnValue1 =
	coalesce((select count(*) as count1 from dbo.Games where Team1Id = @TeamId and Team1Score > Team2Score), 0) + 
	coalesce((select count(*) as count2 from dbo.Games where Team2Id = @TeamId and Team2Score > Team1Score), 0)
	
	return @ReturnValue1
end
GO

alter table [dbo].[Standings]
add Wins as  [dbo].[GetWins](TeamId)
go

