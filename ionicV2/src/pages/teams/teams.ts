import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import _ from 'lodash';
import { TeamHomePage } from '../pages';
import { Api } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})

export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
  queryText = "";

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
        loader.dismiss();
      });
    });

    // this.teams = selectedTourney.standings;
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  updateTeams($event){
    let queryTextLower = this.queryText.toLowerCase();
    let filteredTeams = [];

    _.forEach(this.allTeamDivisions, td => {
      console.log("hey:", td.divisionTeams)
      let teams = _.filter(td.divisionTeams, t => (<any>t).team.name.toLowerCase().includes(queryTextLower));
      if(teams.length){
        filteredTeams.push({divisionName: td.divisionName, divisionTeams: teams});
      }
    })

    this.teams = filteredTeams;
  }
}
