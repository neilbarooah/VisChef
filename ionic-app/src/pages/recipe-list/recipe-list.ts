import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeSearchServiceProvider } from '../../providers/recipe-search-service/recipe-search-service';
import { ModalController } from 'ionic-angular';
import { Recipe } from '../../data/recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  private recipes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recipeSearchService: RecipeSearchServiceProvider,
    private modalCtrl: ModalController) {
      this.recipeSearchService.makeQuery().subscribe(data => {
          console.log("Request worked");
          console.log(data);
          this.recipes = data;
      });
  }

  ionViewDidLoad() {
  }

  selectRecipe(recipe: Recipe) {
      const modal = this.modalCtrl.create(RecipeDetailPage, recipe);
      modal.present();
  }

}
