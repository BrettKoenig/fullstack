import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { AuthService } from '../../shared/shared';
import { RegisterPage, MyTeamsPage } from '../pages';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastController: ToastController,
    private googlePlus: GooglePlus, private nativeStorage: NativeStorage) { }

  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
          this.loading.dismiss();
          this.nav.setRoot(MyTeamsPage)
        });
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  doGoogleLogin() {
    let internalLoading = this.loading;
    let internalAuth = this.auth;
    let internalStorage = this.nativeStorage;
    let internalNav = this.nav;
    this.showLoading();
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '564351314560-3367kb7doe144pg19ukog9l8pnta3mda.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    })
      .then(function (user) {
        internalLoading.dismiss();
        internalAuth.setExternalUser({ token: user.idToken, email: user.email, serverAuth: user.serverAuthCode, provider: "Google" }).subscribe(response => {
          internalStorage.setItem('user', {
            token: user.idToken,
            photo: user.imageUrl,
            serverAuthCode: user.serverAuthCode,
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          }).then(function () {
            setTimeout(() => {
              internalLoading.dismiss();
              internalNav.setRoot(MyTeamsPage)
            });
          }, function (error) {
            internalLoading.dismiss();
            alert(error);
              internalNav.setRoot(MyTeamsPage)
          })
        },
          error => {
            alert(error)
            console.log(error)
          });
        //need to subscribe to this to get the returned token

      }, function (error) {
        setTimeout(() => {
          alert(error);
          let user = { token: "test", email: "test", serverAuth: "test", provider: "Google" }
          internalAuth.setExternalUser(user).subscribe(response => {
            console.log(response)
            alert(response)
          },
            error => {
              alert(error)
              console.log(error)
            });
          //internalLoading.dismiss();
        });
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let toast = this.toastController.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}