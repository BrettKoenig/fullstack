import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage, TeamHomePage, LoginPage } from '../pages';

import { Api, UserSettings, AuthService } from '../../shared/shared';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites = [];
  username = '';
  email = '';

  constructor(private navCtrl: NavController, private navParams: NavParams, private loadingController: LoadingController, private Api:Api, private UserSettings:UserSettings, private AuthService:AuthService) {
    let info = this.AuthService.getUserInfo();
    this.username = info.name;
    this.email = info.email;
   }

  ionViewDidLoad() {
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite){
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
  }

  ionViewDidEnter(){
    this.favorites = this.UserSettings.getAllFavorites();
  }

  public logout() {
    this.AuthService.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }

}
