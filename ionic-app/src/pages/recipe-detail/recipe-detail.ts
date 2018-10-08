import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecipeSearchServiceProvider } from '../../providers/recipe-search-service/recipe-search-service';
import { Recipe } from '../../data/recipe';
import { ViewController } from 'ionic-angular';
import { RecipeProvider } from '../../providers/recipe/recipe';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {

  private recipe: Recipe;
  rate: number;
  locale: string;
  private recipeSteps: any[];
  private recipeIngredients: any[];
  private recipeNutrients: any[];
  private view: string = "Ingredients"

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private recipeSearchService: RecipeSearchServiceProvider,
    private tts: TextToSpeech,
    private recipeProvider: RecipeProvider,
    private toastController: ToastController) {
      this.recipe = this.navParams.data;
      this.recipeSearchService.getRecipeInfo(this.recipe.id).subscribe(data => {
          console.log(data);
          this.recipeSteps = data["analyzedInstructions"][0]["steps"].filter(d => d["step"].split(" ").length != 1);
          console.log(this.recipeSteps);
          this.recipeIngredients = data["extendedIngredients"];
          this.recipeNutrients = data["nutrition"]["nutrients"];
          this.recipeNutrients.sort((a, b) => {
              if (a["title"] == b["title"]) {
                  return 0;
              }
              return (a["title"] > b["title"]) ? 1 : -1;
          })
          //this.recipeSteps = data[0].steps.filter(d => d["step"].split(" ").length != 1);
      })
      this.rate = 1;
      this.locale = 'en-US';
  }

  readRecipe(step: string) {
    this.tts.speak({
      text: step,
      rate: this.rate / 6,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ionViewDidLoad() {
  }

  onClose() {
      this.viewCtrl.dismiss();
  }

  addRecipe() {
      this.recipeProvider.addRecipe(this.recipe).subscribe(data => {
          console.log("RECIPE ADD SUCCESSFUL!")
          let toast = this.toastController.create({
              message: "Recipe added!",
              duration: 3000,
              position: 'top'
          })
          toast.present();
      }, error => {
          console.log(error);
      })
      /*let toast = this.toastController.create({
          message: "Recipe Added!",
          duration: 3000
      })
      toast.present();*/
  }

}
