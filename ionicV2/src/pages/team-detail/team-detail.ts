import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, LoadingController } from 'ionic-angular';

import _ from 'lodash';
import * as moment from 'moment';

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
  dateFilter: string;
  team: any;
  teamStanding: any;
  games: any[];
  private tourneyData: any;
  allGames: any[];
  useDateFilter = false;
  isFollowing = false;

  constructor(private navCtrl: NavController, private navParams: NavParams, private Api: Api, private LoadingController: LoadingController, private AlertController: AlertController) { }

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
    this.allGames = this.games;
    this.teamStanding = _.find(this.tourneyData.standings, { 'teamId': this.team.teamId })
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

  gameClicked($event, game) {
    let sourceGame = this.tourneyData.games.find(g => g.gameId === game.gameId);
    this.navCtrl.push(GamePage, sourceGame);
  }
  getScoreWorL(game) {
    return game.scoreDisplay ? game.scoreDisplay[0] : '';
  }

  getScoreDisplayBadgeClass(game) {
    return game.scoreDisplay.indexOf('W:') === 0 ? 'primary' : 'danger';
  }
  dateChanged() {
    if (this.useDateFilter) {
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    } else {
      this.games = this.allGames;
    }
  }

  toggleFollow(){
    if(this.isFollowing){
      let confirm = this.AlertController.create({
        title: 'Unfollow?',
        message: 'Are you sure you want to unfollow?',
        buttons: [{
          text: 'Yes',
          handler: () => {
            this.isFollowing = false;
            //persist data to db
          }
        },
        {
          text: 'No'
        }
        ]
      });
      confirm.present();
    }else{
      this.isFollowing = true;
      //persist data to db
    }
  }
}
