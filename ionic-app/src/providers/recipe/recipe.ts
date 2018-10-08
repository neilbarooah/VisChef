import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {

  private recipes: any[] = [];
  private contentHeaders: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(public http: HttpClient, private authProvider: AuthProvider) {
    console.log('Hello RecipeProvider Provider');
  }

  getRecipes() {
      let requestURL = "https://vischef.com/users/" + this.authProvider.getUserID() + "/recipes";
      return this.http.get(requestURL)
  }

  addRecipe(recipe: any) {
      let requestURL = "https://vischef.com/users/" + this.authProvider.getUserID() + "/recipes";
      return this.http.post(requestURL, recipe, { headers: this.contentHeaders })
  }

}
