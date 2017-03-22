import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AuthService } from '../../shared/shared';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '', confirmPassword: '' };

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private toastController: ToastController) { }

  register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
        this.nav.popToRoot();
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      }
    );
  }

  showPopup(title, text) {
    // let alert = this.alertCtrl.create({
    //   title: title,
    //   subTitle: text,
    //   buttons: [
    //     {
    //       text: 'OK',
    //       handler: data => {
    //         if (this.createSuccess) {
    //           this.nav.popToRoot();
    //         }
    //       }
    //     }
    //   ]
    // });
    // alert.present();
    let toast = this.toastController.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}