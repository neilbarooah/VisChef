import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RecipeSearchPage } from '../pages/recipe-search/recipe-search';
import { ProfilePage } from '../pages/profile/profile';
import { AuthProvider } from '../providers/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  homePage:any = LoginPage;
  profilePage:any = ProfilePage;
  recipeSearchPage:any = RecipeSearchPage;
  loginPage: any = LoginPage;
  @ViewChild('nav') nav: NavController;
  isAuthenticated: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtrl: MenuController,
      private authProvider: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    console.log("LOADING");
    this.authProvider.getEmitter().subscribe(data => {
        this.isAuthenticated = data;
        if (data) {
            this.homePage = HomePage;
            this.nav.setRoot(HomePage);
        } else {
            this.homePage = LoginPage;
            this.nav.setRoot(LoginPage);
        }

    })
    /*console.log("CHECKING LOGIN");
    this.authProvider.isLoggedIn().then(data => {
        if (data.status === "connected") {
            console.log("IS CONNECTED");
            this.isAuthenticated = true;
            this.homePage = HomePage
        } else {
            console.log("NOT CONNECTED");
            this.isAuthenticated = false;
            this.homePage = LoginPage
        }
    })
    .catch(error => {
        console.log("ERROR");
        console.log(error);
    })*/
  }

  ionViewWillLoad() {

  }

  onLoad(page: any) {
      this.nav.setRoot(page);
      this.menuCtrl.close();
  }

  logout() {
      this.authProvider.logout().then(data => {
          this.isAuthenticated = false;
          this.homePage = LoginPage;
          this.nav.setRoot(LoginPage);
          this.menuCtrl.close();
      }).catch(e => {
          console.log("ERROR:");
          console.log(e);
      })
  }
}
