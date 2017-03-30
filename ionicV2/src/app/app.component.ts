import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';

import { MyTeamsPage, TournamentsPage, TeamHomePage, LoginPage } from '../pages/pages';
import { Api, UserSettings, AuthService, Constant } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
    Api,
    UserSettings,
    HttpModule,
    AuthService,
    Constant,
    NativeStorage,
    GooglePlus
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];

  rootPage: any = LoginPage;
  //was MyTeamsPage

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, private UserSettings: UserSettings, private LoadingController: LoadingController, private Api: Api, private Events: Events, private AuthService: AuthService,
    private googlePlus: GooglePlus, private nativeStorage: NativeStorage) {
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

  refreshFavorites() {
    this.favoriteTeams = this.UserSettings.getAllFavorites();
  }

  goHome() {
    this.nav.push(MyTeamsPage);
  }

  logout() {
    this.AuthService.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }

  doGoogleLogout() {
    this.googlePlus.logout()
      .then(function (response) {
        this.nativeStorage.remove('user');
        this.nav.setRoot(LoginPage);
      }, function (error) {
        console.log(error);
      })
  }

  goToTeam(favorite) {
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

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
}
