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
  standings: any[];
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Api: Api) {}

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.Api.getCurrentTournament();
    this.standings = tourneyData.standings;

    // this.allStandings = _.chain(this.standings)
    // .groupBy('division.name')
    // .toPairs()
    // .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
    // .value();

  }

  getHeader(record, recordIndex, records){
    if(recordIndex === 0 || record.division !== records[recordIndex-1].division){
      return record.division;
    }
    return null;
  }

}
