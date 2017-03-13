import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {StandingsPage, TeamDetailPage, MyTeamsPage} from '../pages';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {
  team:any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    //when come from my-teams it needs to be this.team.name
    //when come from teams it is this.team.team.name
  }

  ionViewDidLoad() {
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
