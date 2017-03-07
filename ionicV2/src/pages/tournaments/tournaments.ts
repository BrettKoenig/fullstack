import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, TeamsPage} from '../pages';
import { Api } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {
  tournaments:any;

  constructor(private nav: NavController, public navParams: NavParams, private Api: Api) {}

  ionViewDidLoad() {
    //old way with promises
    //this.Api.getTournaments().then(data => this.tournaments = data);
    //new way // 
    this.Api.getTournaments().subscribe(data => {
      this.tournaments = data;
    });
  }

  itemTapped($event, tourney){
    this.nav.push(TeamsPage, tourney);
  }
}
