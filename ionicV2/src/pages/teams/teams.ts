import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamDetailPage } from '../pages';
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

    this.teams = selectedTourney.standings;
    
    this.Api.setCurrentTournament(selectedTourney);
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamDetailPage, team);
  }
}
