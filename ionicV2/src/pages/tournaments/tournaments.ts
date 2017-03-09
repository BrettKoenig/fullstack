import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';
import { Api } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {
  tournaments: any;

  constructor(private nav: NavController, public navParams: NavParams, private Api: Api, private LoadingController: LoadingController) { }

  ionViewDidLoad() {
    let loader = this.LoadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(() => {
      this.Api.getTournaments().subscribe(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });

  }

  itemTapped($event, tourney) {
    this.nav.push(TeamsPage, tourney);
  }
}
