import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailPage } from './recipe-detail';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [],
  imports: [
    IonicPageModule.forChild(RecipeDetailPage),
  ],
  providers: [
    TextToSpeech
  ]
})
export class RecipeDetailPageModule {}
