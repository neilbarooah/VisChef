import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CameraSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraSearchProvider {

  private headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(public http: HttpClient) {

  }

  identifyIngredients(imageData: string) {
      const requestBody: any  = {
          "key": "a1154b7c0f771ceb3a1e6a9e1130e692d06b9e2a7589e657a098085a3e3bf13d",
          "base64": imageData
      };
      const requestURL: string = "https://vischef.com/api/predictions";
      return this.http.post(requestURL, requestBody, { headers: this.headers });
  }

}
