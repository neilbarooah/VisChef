import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';
import { CameraSearchProvider } from '../../providers/camera-search/camera-search';
import { RecipeListPage } from '../recipe-list/recipe-list';
import { Camera } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-image-search',
  templateUrl: 'image-search.html',
})
export class ImageSearchPage {

  private ingredients: string[] = [];
  private selectedIngredients: string[] = [];
  private imageURL: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera,
    private cameraSearchProvider: CameraSearchProvider,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  takeImage(source: number) {
      this.camera.getPicture({
          sourceType: source,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }).then((imageData) => {
          this.imageURL = "data:image/jpeg;base64," + imageData;
          let loader = this.loadingCtrl.create({
              content: "Identifying ingredients..."
          })
          loader.present();
          this.cameraSearchProvider.identifyIngredients(imageData).subscribe((data) => {
              loader.dismiss()
              let ingredientArray = <Array<any>>data;
              this.ingredients = ingredientArray.map(d => {
                  return d["name"]
              });
          }, (error) => {
              loader.dismiss();
              let alert = this.alertCtrl.create({
                  message: "Sorry, our server's down currently!",
                  buttons: ["Ok"]
              })
              alert.present();
              console.log(error);
          })
      }, (error) => {
          console.log(error);
      })
  }

  editList(ingredient: string, selected: any) {
      if (selected.checked) {
          this.selectedIngredients.push(ingredient);
      } else {
          let index = this.selectedIngredients.indexOf(ingredient);
          this.selectedIngredients.splice(index, 1);
      }
  }

  onClose() {
      this.viewCtrl.dismiss(this.selectedIngredients);
  }

}
