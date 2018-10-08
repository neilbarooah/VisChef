import { Component } from '@angular/core';
import { IonicPage,
    NavController,
    NavParams,
    AlertController,
    ModalController } from 'ionic-angular';
import { ImageSearchPage } from '../image-search/image-search';
import { TextSearchPage } from '../text-search/text-search';
import { RecipeListPage } from '../recipe-list/recipe-list';
import { RecipeSearchServiceProvider } from '../../providers/recipe-search-service/recipe-search-service';


@IonicPage()
@Component({
  selector: 'page-recipe-search',
  templateUrl: 'recipe-search.html',
})
export class RecipeSearchPage {

  imageSearch = ImageSearchPage;
  textSearch = TextSearchPage;
  ingredients: string[] = [];
  searchString: string = null;
  searchKey: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private alertCtrl: AlertController,
      private modalCtrl: ModalController,
      private recipeSearchService: RecipeSearchServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeSearchPage');
  }

  enterIngredient() {
      console.log(this.searchString);
      if (this.searchString != null) {
          this.ingredients.push(this.formatString(this.searchString))
      }
      this.searchString = null;
  }

  formatString(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  removeIngredient(index: number) {
      if (this.ingredients[index] == this.searchKey) {
          this.searchKey = null;
      }
      this.ingredients.splice(index, 1);
  }

  search() {
      if (this.searchKey == null || this.ingredients.length <= 1) {
          let alert = this.alertCtrl.create({
              title: "Invalid Search",
              message: "Make sure you've selected a single search key and filled in a group of at least 2 ingredients!",
              buttons: ['Ok']
          })
          alert.present();
      } else {
          /*this.ingredients.push('Flour', 'Sugar', 'Butter', 'Cream', 'Salt',
          'Pepper', 'Rosemary', 'Thyme', 'Oregano', 'Eggs', 'Milk', 'Canola oil',
          'Olive oil', 'Soy sauce', 'Mustard', 'Mayonnaise');*/
          this.recipeSearchService.setQuery(this.searchKey)
          this.recipeSearchService.setIngredients(this.ingredients)
          this.navCtrl.push(RecipeListPage)
      }
  }

  cameraSearch() {
      const modal = this.modalCtrl.create(ImageSearchPage);
      modal.present();
      modal.onDidDismiss(ingredients => {
          if (ingredients) {
              for (let i = 0; i < ingredients.length; i++) {
                  this.ingredients.push(this.formatString(ingredients[i]))
              }
          }
      })
  }

}
