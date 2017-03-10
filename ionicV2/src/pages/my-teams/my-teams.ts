import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage, TeamHomePage } from '../pages';

import { Api } from '../../shared/shared';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites = [
    {
      team: {teamId: 1, name: 'Baltimore Stars', coach: 'James'},
      tournamentId: 1,
      tournamentName: 'Cager Classic'
    },
    {
      team: {teamId: 2, name: 'DC Assault', coach: 'Bartlett'},
      tournamentId: 1,
      tournamentName: 'Cager Classic'
    }
  ];

  constructor(private navCtrl: NavController, private navParams: NavParams, private loadingController: LoadingController, private Api:Api) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
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
    console.log(favorite)
    this.Api.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team))
  }

}
