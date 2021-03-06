import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import _ from 'lodash';
import { Api } from '../../shared/shared';
/*
  Generated class for the Standings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {
  allStandings: any[];
  divisionFilter = 'division';
  standings: any[];
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Api: Api) { }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.Api.getCurrentTournament();
    this.standings = tourneyData.standings;

    // this.allStandings = _.chain(this.standings)
    // .groupBy('division.name')
    // .toPairs()
    // .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
    // .value();

    this.allStandings = tourneyData.standings;

    this.filterDivision();
  }

  filterDivision() {
    if (this.divisionFilter === 'all') {
      this.standings = this.allStandings;
    } else {
      this.standings = _.filter(this.allStandings, s => s.division.divisionId === this.team.division.divisionId);
    }
  }

  getHeader(record, recordIndex, records) {
    if (recordIndex === 0 || record.division.divisionId !== records[recordIndex - 1].division.divisionId) {
      return record.division.name;
    }
    return null;
  }

}
