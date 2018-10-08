import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private authProvider: AuthProvider) {
        /*this.authProvider.isLoggedIn().then(data => {
            if (data.status === "connected") {
                console.log("IS CONNECTED");
                this.authProvider.fireEvent(true);
            } else {
                console.log("NOT CONNECTED");
                this.authProvider.fireEvent(false);
            }
        })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
      this.authProvider.login().then(data => {
          if (data["status"] === "connected") {
              this.authProvider.setToken(data["authResponse"]["accessToken"])
              this.authProvider.getUserDetail(data["authResponse"]["userID"])
              this.navCtrl.setRoot(HomePage);
              this.authProvider.fireEvent(true);
          } else {
              this.authProvider.fireEvent(false);
          }
      }).catch(error => {
          this.authProvider.fireEvent(false);
          console.log(error);
      })
  }

}
