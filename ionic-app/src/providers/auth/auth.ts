import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  amLoggedIn: EventEmitter<boolean> = new EventEmitter();
  token: string = "";
  userID: string;
  userData: any;

  constructor(public http: HttpClient, private fb: Facebook) {

  }

  isLoggedIn() {
      return this.fb.getLoginStatus();
  }

  login() {
      return this.fb.login(['public_profile', 'user_friends', 'email']);
  }

  logout() {
      return this.fb.logout();
  }

  getUserDetail(userID) {
      this.userID = userID;
      console.log("USER ID: ")
      console.log(userID);
      this.fb.api("/"+userID+"/?fields=id,email,name,picture,gender",["public_profile"]).then(data => {
          this.userData = data;
          console.log("USER DATA:");
          console.log(this.userData);
      }).catch(error => {
          console.log("ERROR WHILE GETTING USER DATA:")
          console.log(error);
      })
  }

  fireEvent(event: boolean) {
      this.amLoggedIn.emit(event);
  }

  getEmitter() {
      return this.amLoggedIn;
  }

  setToken(token: string) {
      this.token = token;
      console.log("TOKEN SET!")
  }

  getUserData() {
      return this.userData;
  }

  getUserID() {
      return this.userID;
  }

}
