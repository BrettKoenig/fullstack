import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { Api } from '../../shared/shared';
/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: Api) {}

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData = this.Api.getCurrentTournament();
    let team = tourneyData.standings.find(t => t.team.teamId == teamId);
    this.navCtrl.push(TeamHomePage, team);
  }
}
