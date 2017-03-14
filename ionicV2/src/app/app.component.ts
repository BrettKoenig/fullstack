import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';

import { MyTeamsPage, TournamentsPage, GamePage, TeamHomePage } from '../pages/pages';
import { Api, UserSettings } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
    Api,
    UserSettings,
    HttpModule
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];

  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private UserSettings: UserSettings, private LoadingController:LoadingController, private Api:Api, private Events:Events) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.refreshFavorites();
      Splashscreen.hide();

      this.Events.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }

 refreshFavorites(){
   this.favoriteTeams = this.UserSettings.getAllFavorites();
 }

  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTeam(favorite){
    let loader = this.LoadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.Api.getTournamentData(favorite.tournamentId).subscribe(t => {
      this.Api.setCurrentTournament(t);
      this.nav.push(TeamHomePage, favorite);
    })
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
