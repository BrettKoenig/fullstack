import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import _ from 'lodash';
import { TeamDetailPage } from '../pages';
import { Api } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})

export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private Api: Api, private LoadingController: LoadingController) { }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.LoadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.Api.getTournamentData(selectedTourney.tournamentId).subscribe(data => {
        //get teams from stadings
        this.allTeams = data.standings;

        this.Api.setCurrentTournament(selectedTourney);
        this.allTeamDivisions = _.chain(data.standings)
          .groupBy('division.name')
          .toPairs()
          .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
          .value();

        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loader.dismiss();
      });
    });

    // this.teams = selectedTourney.standings;
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamDetailPage, team);
  }
}
