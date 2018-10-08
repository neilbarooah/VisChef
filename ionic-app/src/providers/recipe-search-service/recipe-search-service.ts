import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the RecipeSearchServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeSearchServiceProvider {

  private searchParams = {
      "query": "",
      "ingredients": [],
      "profile": {}
  }

  private headers: HttpHeaders = new HttpHeaders({ "X-Mashape-Key": "IYtTEskRRumshZ8jbAFbQGfEcTe3p1nQ65ljsnWJMcOcldnfRv" });
  private contentHeaders: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(public http: HttpClient, private authProvider: AuthProvider) {
    console.log(this.searchParams);
  }

  setQuery(queryString: string) {
      this.searchParams["query"] = queryString;
  }

  clearQuery() {
      this.searchParams["query"] = "";
  }

  setIngredients(ingredients) {
      this.searchParams["ingredients"] = ingredients;
  }

  clearIngredients() {
      this.searchParams["ingredients"] = [];
  }

  setProfile(profile) {
      this.searchParams["profile"] = profile
  }

  makeQuery() {
      /*let requestURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?ranking=1&offset=0&number=25&limitLicense=false&instructionsRequired=true";
      if (this.searchParams["query"] != "") {
          requestURL += ("&query=" + this.searchParams["query"])
      }
      if (this.searchParams["ingredients"] != []) {
          let ingredientList = this.searchParams["ingredients"][0]
          for (let i = 1; i < this.searchParams["ingredients"].length; i++) {
              ingredientList += ("," + this.searchParams["ingredients"][i]);
          }
          requestURL += ("&includeIngredients=" + ingredientList)
      }
      if (this.searchParams["profile"] != null && this.searchParams["profile"] != {}) {
          for (let key in this.searchParams["profile"]) {
              console.log("Key: " + key);
              console.log("Value: " + this.searchParams["profile"][key])
              requestURL += ("&" + key + "=" + this.searchParams["profile"][key])
          }
      }
      console.log(requestURL);
      return this.http.get(requestURL, { headers: this.headers })*/
      let requestURL = "https://vischef.com/api/recipes";
      let usedIngredients = this.searchParams["ingredients"].filter(d => d != this.searchParams["query"])
      let ingredientList = usedIngredients[0];
      for (let i = 1; i < usedIngredients.length; i++) {
          ingredientList += ("," + usedIngredients[i]);
      }
      let requestBody = {
	         "key": "a1154b7c0f771ceb3a1e6a9e1130e692d06b9e2a7589e657a098085a3e3bf13d",
	         "query": this.searchParams["query"],
	         "ingredients": ingredientList,
           "userId": this.authProvider.getUserID()
      }
      return this.http.post(requestURL, requestBody, { headers: this.contentHeaders })
  }

  getRecipeInfo(id: number) {
      let requestURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information?includeNutrition=true";
      return this.http.get(requestURL, { headers: this.headers })
  }

}
