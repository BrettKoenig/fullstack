import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage, TeamHomePage } from '../pages';

import { Api, UserSettings } from '../../shared/shared';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites = [];

  constructor(private navCtrl: NavController, private navParams: NavParams, private loadingController: LoadingController, private Api:Api, private UserSettings:UserSettings) { }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MyTeamsPage');
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite){
    console.log("TEAM FROM MY TEAMS HA:",favorite)
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.Api.getTournamentData(favorite.tournamentId)
      .subscribe(t => {
      this.Api.setCurrentTournament(t);
      this.navCtrl.push(TeamHomePage, favorite);
    });
    //this.navCtrl.push(TeamHomePage, favorite);
  }

  ionViewDidEnter(){
    this.favorites = this.UserSettings.getAllFavorites();
  }

}
