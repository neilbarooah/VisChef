import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RecipeSearchServiceProvider } from '../../providers/recipe-search-service/recipe-search-service';
import { ProfileProvider } from '../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private intolerances: string[] = [
      "Dairy",
      "Egg",
      "Gluten",
      "Peanut",
      "Seasame",
      "Seafood",
      "Shellfish",
      "Soy",
      "Sulfite",
      "Tree Nut",
      "Wheat"
  ]

  private diets: string[] = [
      "No restrictions",
      "Pescetarian",
      "Lacto Vegetarian",
      "Ovo Vegetarian",
      "Vegan",
      "Paleo",
      "Primal",
      "Vegetarian"
  ]

  private currentProfile: any = {
      "diet": "Vegetarian",
      "intolerances": [],
      "protein_range": {
          "lower": 0,
          "upper": 50
      },
      "carb_range": {
          "lower": 0,
          "upper": 150
      },
      "fat_range": {
          "lower": 0,
          "upper": 50
      },
      "calorie_range": {
          "lower": 0,
          "upper": 1500
      }
  }

  private profile: any;
  private imageString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recipeSearchService: RecipeSearchServiceProvider,
    private authProvider: AuthProvider,
    private profileProvider: ProfileProvider,
    private toastController: ToastController) {
      this.diets.sort()
      this.profile = this.authProvider.getUserData();
      this.imageString = "https://graph.facebook.com/" + this.authProvider.getUserID() + "/picture?width=1024&height=1024"
      this.profileProvider.getUserProfile().subscribe(data => {
          console.log("PROFILE:");
          console.log(data);
          this.currentProfile["diet"] = data["diet"],
          this.currentProfile["intolerances"] = data["intolerances"]
          this.currentProfile["protein_range"]["lower"] = data["minProtein"]
          this.currentProfile["protein_range"]["upper"] = data["maxProtein"]
          this.currentProfile["carb_range"]["lower"] = data["minCarbs"]
          this.currentProfile["carb_range"]["upper"] = data["maxCarbs"]
          this.currentProfile["fat_range"]["lower"] = data["minFat"]
          this.currentProfile["fat_range"]["upper"] = data["maxFat"]
          this.currentProfile["calorie_range"]["lower"] = data["minCalories"]
          this.currentProfile["calorie_range"]["upper"] = data["maxCalories"]
          console.log("GOT PROFILE!");
      },
      error => {
        let toast = this.toastController.create({
            message: "You need to create a profile!",
            duration: 3000,
            position: 'top'
        })
        toast.present();
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  saveProfile() {
      console.log(this.currentProfile);
      //this.recipeSearchService.setProfile(this.currentProfile["restrictions"]);
      this.profileProvider.updateProfile(this.currentProfile).subscribe(data => {
          console.log("UPDATE SUCCESSFUL!")
          let toast = this.toastController.create({
              message: "Profile saved successfully!",
              duration: 3000,
              position: 'top'
          })
          toast.present();
      }, error => {
          console.log(error);
      })
  }

}
