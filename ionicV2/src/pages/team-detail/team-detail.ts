import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import _ from 'lodash';

import { GamePage } from '../pages';
import { Api } from '../../shared/shared';
/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  team: any;
  teamStanding: any;
  games: any[];
  private tourneyData: any;
  allGames: any[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private Api: Api, private LoadingController: LoadingController) { }

  ionViewDidLoad() {
    this.team = this.navParams.data.team;
    this.tourneyData = this.Api.getCurrentTournament();
    
    this.games = _.chain(this.tourneyData.games)
      .filter(g => g.team1Id === this.team.teamId || g.team2Id === this.team.teamId)
      .map(g => {
        let isTeam1 = (g.team1Id === this.team.teamId);
        let opponentName = isTeam1 ? g.team2.name : g.team1.name;
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
        return {
          gameId: g.gameId,
          opponent: opponentName,
          time: Date.parse(g.time),
          location: g.location,
          locationUrl: g.locationUrl,
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs." : "at")
        };
      })
      .value();
      this.teamStanding = _.find(this.tourneyData.standings, {'teamId' :this.team.teamId})
      console.log(this.teamStanding)
      console.log("STANDING")
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    } else {
      return "";
    }
  }

  gameClicked($event, game){
    let sourceGame = this.tourneyData.games.find(g => g.gameId === game.gameId);
    this.navCtrl.push(GamePage, sourceGame);
  }

}
