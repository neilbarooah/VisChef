import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipeSearchPage } from '../pages/recipe-search/recipe-search';
import { ProfilePage } from '../pages/profile/profile';
import { ImageSearchPage } from '../pages/image-search/image-search';
import { TextSearchPage } from '../pages/text-search/text-search';
import { RecipeListPage } from '../pages/recipe-list/recipe-list';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';
import { CuisineSelectionComponent } from '../components/cuisine-selection/cuisine-selection';
import { LoginPage } from '../pages/login/login';

import { RecipeSearchServiceProvider } from '../providers/recipe-search-service/recipe-search-service';
import { CameraSearchProvider } from '../providers/camera-search/camera-search';
import { AuthProvider } from '../providers/auth/auth';
import { Facebook } from '@ionic-native/facebook';
import {TextToSpeech } from '@ionic-native/text-to-speech';
import { ProfileProvider } from '../providers/profile/profile';
import { RecipeProvider } from '../providers/recipe/recipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeSearchPage,
    ProfilePage,
    TextSearchPage,
    ImageSearchPage,
    RecipeListPage,
    RecipeDetailPage,
    CuisineSelectionComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeSearchPage,
    ProfilePage,
    TextSearchPage,
    ImageSearchPage,
    RecipeListPage,
    RecipeDetailPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    RecipeSearchServiceProvider,
    CameraSearchProvider,
    AuthProvider,
    Facebook,
    TextToSpeech,
    ProfileProvider,
    RecipeProvider
  ]
})
export class AppModule {}
