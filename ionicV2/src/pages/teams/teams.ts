import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { Api } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private Api: Api) { }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;
    // this.Api.getTournamentData(selectedTourney.tournamentId).subscribe(data => {
    //   this.teams = data.teams;
    //   console.log(this.teams);
    // });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
