import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeSearchServiceProvider } from '../../providers/recipe-search-service/recipe-search-service';
import { RecipeListPage } from '../recipe-list/recipe-list';

/**
 * Generated class for the TextSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-search',
  templateUrl: 'text-search.html',
})
export class TextSearchPage {
  inputTerm: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeSearchService: RecipeSearchServiceProvider) {
      this.recipeSearchService.clearQuery();
      this.recipeSearchService.clearIngredients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextSearchPage');
  }

  search(cuisines: string[]) {
      console.log(cuisines);
  }

  textSearch() {
      if (this.inputTerm != "") {
          console.log(this.inputTerm);
          this.recipeSearchService.setQuery(this.inputTerm);
          this.navCtrl.push(RecipeListPage);
      }
  }

}
