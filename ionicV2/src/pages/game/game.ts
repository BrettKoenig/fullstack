import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage, MapPage } from '../pages';
import { Api } from '../../shared/shared';
/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
//telling typescript "trust me, window will be there at runtime"
declare var window: any;

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: Api) {}

  ionViewDidLoad() {
    this.game = this.navParams.data;
    console.log("GAME", this.game)
    this.game.gameTime = Date.parse(this.game.time);
  }

  teamTapped(teamId){
    //pop team home off nav stack
    let tourneyData = this.Api.getCurrentTournament();
    let team = tourneyData.standings.find(t => t.team.teamId == teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

  goToDirections(){
    window.location = `geo:${this.game.location.latitude},${this.game.location.longitude};u=35;`
  }

  goToMap(){
    this.navCtrl.push(MapPage, this.game);
  }

  isWinner(score1, score2){
    return Number(score1) > Number(score2);
  }
}
