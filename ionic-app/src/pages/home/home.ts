import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RecipeProvider } from '../../providers/recipe/recipe';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private recipes: any;

  constructor(public navCtrl: NavController, private authProvider: AuthProvider,
      private recipeProvider: RecipeProvider) {
    console.log("Checking status");
    this.recipeProvider.getRecipes().subscribe(data => {
        this.recipes = data;
    }, error => {
        console.log(error);
    })
    /*this.authProvider.isLoggedIn().then(data => {
        if (data["status"] === "connected") {
            console.log("IS CONNECTED");
            this.authProvider.setToken(data["authResponse"]["accessToken"])
            this.authProvider.getUserDetail(data["authResponse"]["userID"])
        } else {
            console.log("NOT CONNECTED");
            this.authProvider.fireEvent(false);
        }
    })
    .catch(error => {
        console.log("ERROR");
        console.log(error);
    })*/
  }

  ngOnInit() {
    /*this.authProvider.isLoggedIn().then(data => {
        if (data["status"] === "connected") {
            console.log("IS CONNECTED");
            this.authProvider.setToken(data["authResponse"]["accessToken"])
            this.authProvider.getUserDetail(data["authResponse"]["userID"])
        } else {
            console.log("NOT CONNECTED");
            this.authProvider.fireEvent(false);
        }
    })
    .catch(error => {
        console.log("ERROR");
        console.log(error);
    })*/
  }

  ionViewDidLoad() {
    console.log("Checking status");
    /*this.authProvider.isLoggedIn().then(data => {
        if (data["status"] === "connected") {
            console.log("IS CONNECTED");
            console.log("LOGGED IN");
            this.authProvider.setToken(data["authResponse"]["accessToken"])
            this.authProvider.getUserDetail(data["authResponse"]["userID"])
        } else {
            console.log("NOT CONNECTED");
            this.authProvider.fireEvent(false);
        }
    })
    .catch(error => {
        console.log("ERROR");
        console.log(error);
    })*/
  }

  ionViewDidEnter() {
    console.log("DID ENTER!!");
    console.log("Checking status");
    /*this.authProvider.isLoggedIn().then(data => {
        if (data["status"] === "connected") {
            console.log("IS CONNECTED");
            console.log("LOGGED IN");
            this.authProvider.setToken(data["authResponse"]["accessToken"])
            this.authProvider.getUserDetail(data["authResponse"]["userID"])
        } else {
            console.log("NOT CONNECTED");
            this.authProvider.fireEvent(false);
        }
    })
    .catch(error => {
        console.log("ERROR");
        console.log(error);
    })*/
  }

}
