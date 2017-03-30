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
        this.auth.setExternalUser({ externalAccessToken: user.idToken, email: user.email, serverAuthCode: user.serverAuthCode, provider: "Google", userName: user.displayName }).subscribe(response => {
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
            console.log(error)
            //internalLoading.dismiss();
            // alert("Error setting item in storage")
            // alert(error);
            // setTimeout(() => {
            //   //this.loading.dismiss();
            //   this.nav.setRoot(MyTeamsPage)
            // });
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
          let user = { externalAccessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2ZWIyMDk0YWMyYjdmNTc2M2RkMzRjYTI3N2EzNDUwZWZiZGI2YTkifQ.eyJhenAiOiI1NjQzNTEzMTQ1NjAtNTdibnVkMTllZ2JxbDgybmU2bWcxY2c1OWZsYjQwODUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NjQzNTEzMTQ1NjAtMzM2N2tiN2RvZTE0NHBnMTl1a29nOWw4cG50YTNtZGEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDkwODU0NDk2NjY4MjM1NzA5OTciLCJlbWFpbCI6ImJyZXR0LmEua29lbmlnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE0OTA4Nzg4ODQsImV4cCI6MTQ5MDg4MjQ4NCwibmFtZSI6IkJyZXR0IEtvZW5pZyIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLXlkS0lOenIweXhrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQVgwLzVwVkRZeEY2Q3ZZL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJCcmV0dCIsImZhbWlseV9uYW1lIjoiS29lbmlnIiwibG9jYWxlIjoiZW4ifQ.NHMjnsYEA9Vn6HWBwQ-n8iPVyXMf3AGKMqI1Dv4OsWTwhJv3hLeQ8mkwMhiMZ3EycU4VnaslZTgixMNBMc-jhWecZwfCizLjwbwni8-fxYrhQDw3ijBFENs6OOaT9CR6GxqGlBTMRWnyNipT3SwyzGRlu4rigODyaptsmwa01YVaM7CdhgKvu3_KTvnaJsxGjppeIXZQztOwePNaZZUxPalO6w0hEepf_gDRcuAAlZFUKDC8QC6zaDx5eTkSvRIOGqFW9qbPPdmwve9JmQoogh5uw002-Z7Qn8wGCZuo4u0UHI6qGXRIilRXb-_mMdQLQnluexbhb-4zLaUe8pwRVw", email: "brett.a.koenig@gmail.com", serverAuthCode: "4/uZbSMINbH40QjmLlDaTbq4Dly8SKxCRMp7wxUsfR4Z4", provider: "Google", userName: "Brett Koenig"}
          this.auth.setExternalUser(user)
          .subscribe(response => {
            alert("setUser good")
            console.log(response)
            //alert(response)
          },
            error => {
              console.log("set User bad")
              //alert(error)
              console.log(error)
              //this.nav.setRoot(MyTeamsPage);
            });
          // //internalLoading.dismiss();
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