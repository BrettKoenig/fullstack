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
    //this.showLoading();
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '564351314560-3367kb7doe144pg19ukog9l8pnta3mda.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    })
      .then((user) => {
        //internalLoading.dismiss();
        //alert("user")
        //alert(user)
        this.auth.setExternalUser({ token: user.idToken, email: user.email, serverAuth: user.serverAuthCode, provider: "Google" }).subscribe(response => {
          //alert("GotResponse")
          //alert(response)
          this.nativeStorage.setItem('user', {
            token: user.idToken,
            photo: user.imageUrl,
            serverAuthCode: user.serverAuthCode,
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          }).then(() => {
            setTimeout(() => {
              //alert("Set Item In storage")
              //internalLoading.dismiss();
              //this.loading.dismiss();
              this.nav.setRoot(MyTeamsPage);
            });
          }, error => {
            //internalLoading.dismiss();
            // alert("Error setting item in storage")
            // alert(error);
            setTimeout(() => {
              //this.loading.dismiss();
              this.nav.setRoot(MyTeamsPage)
            });
          })
        },
          error => {
            //alert("error with setexternaluser")
            //alert(error)
            //console.log(error)
          });
        //need to subscribe to this to get the returned token

      }, error => {
        //alert("Error with google log in")
        setTimeout(() => {
          //alert(error);
          let user = { token: "test", email: "test", serverAuth: "test", provider: "Google" }
          this.auth.setExternalUser(user).subscribe(response => {
            //alert("setUser good")
            //console.log(response)
            //alert(response)
          },
            error => {
              //alert("set User bad")
              //alert(error)
              //console.log(error)
              this.nav.setRoot(MyTeamsPage);
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