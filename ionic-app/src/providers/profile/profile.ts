import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class ProfileProvider {

  private contentHeaders: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(public http: HttpClient, private authProvider: AuthProvider) {
    console.log('Hello ProfileProvider Provider');
  }

  updateProfile(profile: any) {
      let userID = this.authProvider.getUserID();
      let requestURL = "https://vischef.com/users/" + userID + "/profile";
      return this.http.put(requestURL, profile, { headers: this.contentHeaders });
  }

  getUserProfile() {
    let userID = this.authProvider.getUserID();
    let requestURL = "https://vischef.com/users/" + userID + "/profile";
    return this.http.get(requestURL);
  }

}
