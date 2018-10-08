webpackJsonp([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = /*@__PURE__*/__webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(29);





var ProfileProvider = /*@__PURE__*/ (function () {
    function ProfileProvider(http, authProvider) {
        this.http = http;
        this.authProvider = authProvider;
        this.contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpHeaders */]({ "Content-Type": "application/json" });
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.updateProfile = function (profile) {
        var userID = this.authProvider.getUserID();
        var requestURL = "https://vischef.com/users/" + userID + "/profile";
        return this.http.put(requestURL, profile, { headers: this.contentHeaders });
    };
    ProfileProvider.prototype.getUserProfile = function () {
        var userID = this.authProvider.getUserID();
        var requestURL = "https://vischef.com/users/" + userID + "/profile";
        return this.http.get(requestURL);
    };
    return ProfileProvider;
}());






/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = /*@__PURE__*/__webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_recipe_recipe__ = /*@__PURE__*/__webpack_require__(60);






var HomePage = /*@__PURE__*/ (function () {
    function HomePage(navCtrl, authProvider, recipeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.recipeProvider = recipeProvider;
        console.log("Checking status");
        this.recipeProvider.getRecipes().subscribe(function (data) {
            _this.recipes = data;
        }, function (error) {
            console.log(error);
        });
        /*this.authProvider.isLoggedIn().then(data => {
            if (data["status"] === "connected") {
                console.log("IS CONNECTED");
                this.authProvider.setToken(data["authResponse"]["accessToken"])
                this.authProvider.getUserDetail(data["authResponse"]["userID"])
            } else {
                console.log("NOT CONNECTED");
                this.authProvider.fireEvent(false);
            }
        })
        .catch(error => {
            console.log("ERROR");
            console.log(error);
        })*/
    }
    HomePage.prototype.ngOnInit = function () {
        /*this.authProvider.isLoggedIn().then(data => {
            if (data["status"] === "connected") {
                console.log("IS CONNECTED");
                this.authProvider.setToken(data["authResponse"]["accessToken"])
                this.authProvider.getUserDetail(data["authResponse"]["userID"])
            } else {
                console.log("NOT CONNECTED");
                this.authProvider.fireEvent(false);
            }
        })
        .catch(error => {
            console.log("ERROR");
            console.log(error);
        })*/
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("Checking status");
        /*this.authProvider.isLoggedIn().then(data => {
            if (data["status"] === "connected") {
                console.log("IS CONNECTED");
                console.log("LOGGED IN");
                this.authProvider.setToken(data["authResponse"]["accessToken"])
                this.authProvider.getUserDetail(data["authResponse"]["userID"])
            } else {
                console.log("NOT CONNECTED");
                this.authProvider.fireEvent(false);
            }
        })
        .catch(error => {
            console.log("ERROR");
            console.log(error);
        })*/
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("DID ENTER!!");
        console.log("Checking status");
        /*this.authProvider.isLoggedIn().then(data => {
            if (data["status"] === "connected") {
                console.log("IS CONNECTED");
                console.log("LOGGED IN");
                this.authProvider.setToken(data["authResponse"]["accessToken"])
                this.authProvider.getUserDetail(data["authResponse"]["userID"])
            } else {
                console.log("NOT CONNECTED");
                this.authProvider.fireEvent(false);
            }
        })
        .catch(error => {
            console.log("ERROR");
            console.log(error);
        })*/
    };
    return HomePage;
}());






/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_search_camera_search__ = /*@__PURE__*/__webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(98);






var ImageSearchPage = /*@__PURE__*/ (function () {
    function ImageSearchPage(navCtrl, navParams, camera, cameraSearchProvider, viewCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.cameraSearchProvider = cameraSearchProvider;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.ingredients = [];
        this.selectedIngredients = [];
        this.imageURL = null;
    }
    ImageSearchPage.prototype.ionViewDidLoad = function () {
    };
    ImageSearchPage.prototype.takeImage = function (source) {
        var _this = this;
        this.camera.getPicture({
            sourceType: source,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            _this.imageURL = "data:image/jpeg;base64," + imageData;
            var loader = _this.loadingCtrl.create({
                content: "Identifying ingredients..."
            });
            loader.present();
            _this.cameraSearchProvider.identifyIngredients(imageData).subscribe(function (data) {
                loader.dismiss();
                var ingredientArray = data;
                _this.ingredients = ingredientArray.map(function (d) {
                    return d["name"];
                });
            }, function (error) {
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    message: "Sorry, our server's down currently!",
                    buttons: ["Ok"]
                });
                alert.present();
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    ImageSearchPage.prototype.editList = function (ingredient, selected) {
        if (selected.checked) {
            this.selectedIngredients.push(ingredient);
        }
        else {
            var index = this.selectedIngredients.indexOf(ingredient);
            this.selectedIngredients.splice(index, 1);
        }
    };
    ImageSearchPage.prototype.onClose = function () {
        this.viewCtrl.dismiss(this.selectedIngredients);
    };
    return ImageSearchPage;
}());






/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = /*@__PURE__*/__webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = /*@__PURE__*/__webpack_require__(107);







var ProfilePage = /*@__PURE__*/ (function () {
    function ProfilePage(navCtrl, navParams, recipeSearchService, authProvider, profileProvider, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeSearchService = recipeSearchService;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.toastController = toastController;
        this.intolerances = [
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
        ];
        this.diets = [
            "No restrictions",
            "Pescetarian",
            "Lacto Vegetarian",
            "Ovo Vegetarian",
            "Vegan",
            "Paleo",
            "Primal",
            "Vegetarian"
        ];
        this.currentProfile = {
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
        };
        this.diets.sort();
        this.profile = this.authProvider.getUserData();
        this.imageString = "https://graph.facebook.com/" + this.authProvider.getUserID() + "/picture?width=1024&height=1024";
        this.profileProvider.getUserProfile().subscribe(function (data) {
            console.log("PROFILE:");
            console.log(data);
            _this.currentProfile["diet"] = data["diet"],
                _this.currentProfile["intolerances"] = data["intolerances"];
            _this.currentProfile["protein_range"]["lower"] = data["minProtein"];
            _this.currentProfile["protein_range"]["upper"] = data["maxProtein"];
            _this.currentProfile["carb_range"]["lower"] = data["minCarbs"];
            _this.currentProfile["carb_range"]["upper"] = data["maxCarbs"];
            _this.currentProfile["fat_range"]["lower"] = data["minFat"];
            _this.currentProfile["fat_range"]["upper"] = data["maxFat"];
            _this.currentProfile["calorie_range"]["lower"] = data["minCalories"];
            _this.currentProfile["calorie_range"]["upper"] = data["maxCalories"];
            console.log("GOT PROFILE!");
        }, function (error) {
            var toast = _this.toastController.create({
                message: "You need to create a profile!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.saveProfile = function () {
        var _this = this;
        console.log(this.currentProfile);
        //this.recipeSearchService.setProfile(this.currentProfile["restrictions"]);
        this.profileProvider.updateProfile(this.currentProfile).subscribe(function (data) {
            console.log("UPDATE SUCCESSFUL!");
            var toast = _this.toastController.create({
                message: "Profile saved successfully!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }, function (error) {
            console.log(error);
        });
    };
    return ProfilePage;
}());






/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_recipe_recipe__ = /*@__PURE__*/__webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(76);








var RecipeDetailPage = /*@__PURE__*/ (function () {
    function RecipeDetailPage(navCtrl, navParams, viewCtrl, recipeSearchService, tts, recipeProvider, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.recipeSearchService = recipeSearchService;
        this.tts = tts;
        this.recipeProvider = recipeProvider;
        this.toastController = toastController;
        this.view = "Ingredients";
        this.recipe = this.navParams.data;
        this.recipeSearchService.getRecipeInfo(this.recipe.id).subscribe(function (data) {
            console.log(data);
            _this.recipeSteps = data["analyzedInstructions"][0]["steps"].filter(function (d) { return d["step"].split(" ").length != 1; });
            console.log(_this.recipeSteps);
            _this.recipeIngredients = data["extendedIngredients"];
            _this.recipeNutrients = data["nutrition"]["nutrients"];
            _this.recipeNutrients.sort(function (a, b) {
                if (a["title"] == b["title"]) {
                    return 0;
                }
                return (a["title"] > b["title"]) ? 1 : -1;
            });
            //this.recipeSteps = data[0].steps.filter(d => d["step"].split(" ").length != 1);
        });
        this.rate = 1;
        this.locale = 'en-US';
    }
    RecipeDetailPage.prototype.readRecipe = function (step) {
        this.tts.speak({
            text: step,
            rate: this.rate / 6,
            locale: this.locale
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    RecipeDetailPage.prototype.ionViewDidLoad = function () {
    };
    RecipeDetailPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    RecipeDetailPage.prototype.addRecipe = function () {
        var _this = this;
        this.recipeProvider.addRecipe(this.recipe).subscribe(function (data) {
            console.log("RECIPE ADD SUCCESSFUL!");
            var toast = _this.toastController.create({
                message: "Recipe added!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }, function (error) {
            console.log(error);
        });
        /*let toast = this.toastController.create({
            message: "Recipe Added!",
            duration: 3000
        })
        toast.present();*/
    };
    return RecipeDetailPage;
}());






/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = /*@__PURE__*/__webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);






var LoginPage = /*@__PURE__*/ (function () {
    function LoginPage(navCtrl, navParams, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        /*this.authProvider.isLoggedIn().then(data => {
            if (data.status === "connected") {
                console.log("IS CONNECTED");
                this.authProvider.fireEvent(true);
            } else {
                console.log("NOT CONNECTED");
                this.authProvider.fireEvent(false);
            }
        })*/
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authProvider.login().then(function (data) {
            if (data["status"] === "connected") {
                _this.authProvider.setToken(data["authResponse"]["accessToken"]);
                _this.authProvider.getUserDetail(data["authResponse"]["userID"]);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                _this.authProvider.fireEvent(true);
            }
            else {
                _this.authProvider.fireEvent(false);
            }
        }).catch(function (error) {
            _this.authProvider.fireEvent(false);
            console.log(error);
        });
    };
    return LoginPage;
}());






/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_search_image_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_search_text_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe_list_recipe_list__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);








var RecipeSearchPage = /*@__PURE__*/ (function () {
    function RecipeSearchPage(navCtrl, navParams, alertCtrl, modalCtrl, recipeSearchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.recipeSearchService = recipeSearchService;
        this.imageSearch = __WEBPACK_IMPORTED_MODULE_3__image_search_image_search__["a" /* ImageSearchPage */];
        this.textSearch = __WEBPACK_IMPORTED_MODULE_4__text_search_text_search__["a" /* TextSearchPage */];
        this.ingredients = [];
        this.searchString = null;
        this.searchKey = null;
    }
    RecipeSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipeSearchPage');
    };
    RecipeSearchPage.prototype.enterIngredient = function () {
        console.log(this.searchString);
        if (this.searchString != null) {
            this.ingredients.push(this.formatString(this.searchString));
        }
        this.searchString = null;
    };
    RecipeSearchPage.prototype.formatString = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    RecipeSearchPage.prototype.removeIngredient = function (index) {
        if (this.ingredients[index] == this.searchKey) {
            this.searchKey = null;
        }
        this.ingredients.splice(index, 1);
    };
    RecipeSearchPage.prototype.search = function () {
        if (this.searchKey == null || this.ingredients.length <= 1) {
            var alert_1 = this.alertCtrl.create({
                title: "Invalid Search",
                message: "Make sure you've selected a single search key and filled in a group of at least 2 ingredients!",
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else {
            /*this.ingredients.push('Flour', 'Sugar', 'Butter', 'Cream', 'Salt',
            'Pepper', 'Rosemary', 'Thyme', 'Oregano', 'Eggs', 'Milk', 'Canola oil',
            'Olive oil', 'Soy sauce', 'Mustard', 'Mayonnaise');*/
            this.recipeSearchService.setQuery(this.searchKey);
            this.recipeSearchService.setIngredients(this.ingredients);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recipe_list_recipe_list__["a" /* RecipeListPage */]);
        }
    };
    RecipeSearchPage.prototype.cameraSearch = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__image_search_image_search__["a" /* ImageSearchPage */]);
        modal.present();
        modal.onDidDismiss(function (ingredients) {
            if (ingredients) {
                for (var i = 0; i < ingredients.length; i++) {
                    _this.ingredients.push(_this.formatString(ingredients[i]));
                }
            }
        });
    };
    return RecipeSearchPage;
}());






/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_list_recipe_list__ = __webpack_require__(77);






/**
 * Generated class for the TextSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TextSearchPage = /*@__PURE__*/ (function () {
    function TextSearchPage(navCtrl, navParams, recipeSearchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeSearchService = recipeSearchService;
        this.recipeSearchService.clearQuery();
        this.recipeSearchService.clearIngredients();
    }
    TextSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TextSearchPage');
    };
    TextSearchPage.prototype.search = function (cuisines) {
        console.log(cuisines);
    };
    TextSearchPage.prototype.textSearch = function () {
        if (this.inputTerm != "") {
            console.log(this.inputTerm);
            this.recipeSearchService.setQuery(this.inputTerm);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_list_recipe_list__["a" /* RecipeListPage */]);
        }
    };
    return TextSearchPage;
}());






/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/image-search/image-search.module.ngfactory": [
		271,
		6
	],
	"../pages/login/login.module.ngfactory": [
		274,
		5
	],
	"../pages/profile/profile.module.ngfactory": [
		272,
		4
	],
	"../pages/recipe-detail/recipe-detail.module.ngfactory": [
		273,
		3
	],
	"../pages/recipe-list/recipe-list.module.ngfactory": [
		275,
		2
	],
	"../pages/recipe-search/recipe-search.module.ngfactory": [
		276,
		1
	],
	"../pages/text-search/text-search.module.ngfactory": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ImageSearchPage */
/* unused harmony export View_ImageSearchPage_0 */
/* unused harmony export View_ImageSearchPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSearchPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_card_card__ = /*@__PURE__*/__webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_card_card_content__ = /*@__PURE__*/__webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item__ = /*@__PURE__*/__webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_form__ = /*@__PURE__*/__webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_item_item_reorder__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_item_item_content__ = /*@__PURE__*/__webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_label_label__ = /*@__PURE__*/__webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_checkbox_checkbox_ngfactory__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = /*@__PURE__*/__webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_checkbox_checkbox__ = /*@__PURE__*/__webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_list_list__ = /*@__PURE__*/__webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_gestures_gesture_controller__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = /*@__PURE__*/__webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ionic_angular_components_toolbar_toolbar_item__ = /*@__PURE__*/__webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_icon_icon__ = /*@__PURE__*/__webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic_angular_components_toolbar_toolbar_footer__ = /*@__PURE__*/__webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__image_search__ = /*@__PURE__*/__webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_camera_index__ = /*@__PURE__*/__webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_camera_search_camera_search__ = /*@__PURE__*/__webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_loading_loading_controller__ = /*@__PURE__*/__webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ionic_angular_components_alert_alert_controller__ = /*@__PURE__*/__webpack_require__(66);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_card_card,ionic_angular_config_config,ionic_angular_components_card_card_content,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_checkbox_checkbox.ngfactory,_angular_forms,ionic_angular_components_checkbox_checkbox,ionic_angular_components_list_list,ionic_angular_platform_platform,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_angular_common,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,ionic_angular_components_toolbar_toolbar_item,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_icon_icon,ionic_angular_components_toolbar_toolbar_footer,_image_search,ionic_angular_navigation_nav_params,_ionic_native_camera_index,_.._providers_camera_search_camera_search,ionic_angular_components_loading_loading_controller,ionic_angular_components_alert_alert_controller PURE_IMPORTS_END */









































var styles_ImageSearchPage = [];
var RenderType_ImageSearchPage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_ImageSearchPage, data: {} });

function View_ImageSearchPage_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 11, "ion-card", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_card_card__["a" /* Card */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](3, 0, null, null, 7, "ion-card-content", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_card_card_content__["a" /* CardContent */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](6, 0, null, null, 0, "img", [["style", "height: 240px; width: auto;"]], [[8, "src", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Check out the ingredients we found below!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.imageURL; _ck(_v, 6, 0, currVal_0); }); }
function View_ImageSearchPage_3(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 16384, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](11, 0, null, 0, 2, "ion-checkbox", [], [[2, "checkbox-disabled", null]], [[null, "ionChange"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 13)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ionChange" === en)) {
                var pd_1 = (_co.editList(_v.context.$implicit, $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_checkbox_checkbox_ngfactory__["b" /* View_Checkbox_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_checkbox_checkbox_ngfactory__["a" /* RenderType_Checkbox */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](5120, null, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_checkbox_checkbox__["a" /* Checkbox */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](13, 1228800, null, 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_checkbox_checkbox__["a" /* Checkbox */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_form__["a" /* Form */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, { ionChange: "ionChange" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 9, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 13)._disabled; _ck(_v, 11, 0, currVal_1); });
}
function View_ImageSearchPage_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Identified Ingredients"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](5, 0, null, null, 5, "ion-list", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_14_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_15_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_16_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_ImageSearchPage_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](9, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ingredients; _ck(_v, 9, 0, currVal_0); }, null); }
function View_ImageSearchPage_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](4, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_24__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_24__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["VisSearch"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](13, 0, null, null, 33, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_27__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_27__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](14, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_14_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_16_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_29_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 1, 1, "h2", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Get ingredients with just one SNAP!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](19, 0, null, 1, 20, "div", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](21, 0, null, null, 17, "ion-buttons", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](22, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_30_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](25, 0, null, null, 5, "button", [["color", "danger"], ["icon-left", ""], ["ion-button", ""], ["small", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.takeImage(1) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](26, 1097728, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], small: [1, "small"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](28, 0, null, 0, 1, "ion-icon", [["name", "camera"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](29, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            Take Picture\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](32, 0, null, null, 5, "button", [["color", "danger"], ["icon-left", ""], ["ion-button", ""], ["small", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.takeImage(0) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](33, 1097728, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], small: [1, "small"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](35, 0, null, 0, 1, "ion-icon", [["name", "images"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](36, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            Pick From Gallery\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, 1, 1, null, View_ImageSearchPage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](42, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_common__["i" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, 1, 1, null, View_ImageSearchPage_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](45, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_common__["i" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](48, 0, null, null, 6, "ion-footer", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](49, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_34_ionic_angular_components_toolbar_toolbar_footer__["a" /* Footer */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](51, 0, null, null, 2, "button", [["block", ""], ["color", "orange"], ["ion-button", ""], ["round", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onClose() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](52, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], round: [1, "round"], block: [2, "block"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Add Ingredients"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = "danger"; var currVal_5 = ""; _ck(_v, 26, 0, currVal_4, currVal_5); var currVal_7 = "camera"; _ck(_v, 29, 0, currVal_7); var currVal_8 = "danger"; var currVal_9 = ""; _ck(_v, 33, 0, currVal_8, currVal_9); var currVal_11 = "images"; _ck(_v, 36, 0, currVal_11); var currVal_12 = (_co.imageURL != null); _ck(_v, 42, 0, currVal_12); var currVal_13 = (_co.ingredients.length != 0); _ck(_v, 45, 0, currVal_13); var currVal_14 = "orange"; var currVal_15 = ""; var currVal_16 = ""; _ck(_v, 52, 0, currVal_14, currVal_15, currVal_16); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 5)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 14).statusbarPadding; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 29)._hidden; _ck(_v, 28, 0, currVal_6); var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 36)._hidden; _ck(_v, 35, 0, currVal_10); });
}
function View_ImageSearchPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-image-search", [], null, null, null, View_ImageSearchPage_0, RenderType_ImageSearchPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_35__image_search__["a" /* ImageSearchPage */], [__WEBPACK_IMPORTED_MODULE_23_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_36_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_37__ionic_native_camera_index__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_38__providers_camera_search_camera_search__["a" /* CameraSearchProvider */], __WEBPACK_IMPORTED_MODULE_19_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_40_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]], null, null)], null, null); }
var ImageSearchPageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-image-search", __WEBPACK_IMPORTED_MODULE_35__image_search__["a" /* ImageSearchPage */], View_ImageSearchPage_Host_0, {}, {}, []);






/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ProfilePage */
/* unused harmony export View_ProfilePage_0 */
/* unused harmony export View_ProfilePage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_option_option__ = /*@__PURE__*/__webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar_item__ = /*@__PURE__*/__webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_menu_menu_toggle__ = /*@__PURE__*/__webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_app_menu_controller__ = /*@__PURE__*/__webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_icon_icon__ = /*@__PURE__*/__webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_grid_grid__ = /*@__PURE__*/__webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_grid_row__ = /*@__PURE__*/__webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_grid_col__ = /*@__PURE__*/__webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_list_list__ = /*@__PURE__*/__webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular_gestures_gesture_controller__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__ = /*@__PURE__*/__webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__ = /*@__PURE__*/__webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__ = /*@__PURE__*/__webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__ = /*@__PURE__*/__webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__node_modules_ionic_angular_components_select_select_ngfactory__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_select_select__ = /*@__PURE__*/__webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic_angular_navigation_deep_linker__ = /*@__PURE__*/__webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_forms__ = /*@__PURE__*/__webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_common__ = /*@__PURE__*/__webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__ = /*@__PURE__*/__webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__ = /*@__PURE__*/__webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ionic_angular_tap_click_haptic__ = /*@__PURE__*/__webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ionic_angular_components_toolbar_toolbar_footer__ = /*@__PURE__*/__webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__profile__ = /*@__PURE__*/__webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_auth_auth__ = /*@__PURE__*/__webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_profile_profile__ = /*@__PURE__*/__webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic_angular_components_toast_toast_controller__ = /*@__PURE__*/__webpack_require__(75);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_option_option,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_grid_grid,ionic_angular_components_grid_row,ionic_angular_components_grid_col,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_navigation_deep_linker,_angular_forms,_angular_common,ionic_angular_components_badge_badge,_.._.._node_modules_ionic_angular_components_range_range.ngfactory,ionic_angular_components_range_range,ionic_angular_tap_click_haptic,ionic_angular_components_toolbar_toolbar_footer,_profile,ionic_angular_navigation_nav_params,_.._providers_recipe_search_service_recipe_search_service,_.._providers_auth_auth,_.._providers_profile_profile,ionic_angular_components_toast_toast_controller PURE_IMPORTS_END */


















































var styles_ProfilePage = [];
var RenderType_ProfilePage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_ProfilePage, data: {} });

function View_ProfilePage_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, [[6, 4]], 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_option_option__["a" /* Option */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](2, null, ["\n                  ", "\n              "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }); }
function View_ProfilePage_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, [[10, 4]], 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_option_option__["a" /* Option */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](2, null, ["\n                  ", "\n              "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }); }
function View_ProfilePage_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](3, 0, null, null, 21, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](6, 0, null, 1, 13, "ion-buttons", [["start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](7, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](10, 0, null, null, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](12, 1064960, null, 0, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_menu_menu_toggle__["a" /* MenuToggle */], [__WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_app_menu_controller__["a" /* MenuController */], [2, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_button_button__["a" /* Button */]], [2, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](13, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](17, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](21, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](22, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["My Diet Profile"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](27, 0, null, null, 232, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](28, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_22_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](30, 0, null, 1, 21, "ion-grid", [["class", "grid"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](31, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_grid_grid__["a" /* Grid */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](33, 0, null, null, 17, "ion-row", [["class", "row"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](34, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_grid_row__["a" /* Row */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](36, 0, null, null, 4, "ion-col", [["class", "col"], ["col-3", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](37, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_grid_col__["a" /* Col */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](39, 0, null, null, 0, "img", [["style", "height: 75px; width: auto;"]], [[8, "src", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](42, 0, null, null, 7, "ion-col", [["class", "col"], ["col-9", ""], ["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_grid_col__["a" /* Col */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](45, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](47, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](48, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](53, 0, null, 1, 1, "h3", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Specify your profile here"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](56, 0, null, 1, 202, "ion-list", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](57, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_27_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](59, 0, null, null, 22, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](60, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 3, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 4, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 5, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](64, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](66, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](67, 16384, [[3, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Diet"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](70, 0, null, 3, 10, "ion-select", [], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 71)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 71)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.currentProfile["diet"] = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_34__node_modules_ionic_angular_components_select_select_ngfactory__["b" /* View_Select_0 */], __WEBPACK_IMPORTED_MODULE_34__node_modules_ionic_angular_components_select_select_ngfactory__["a" /* RenderType_Select */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](71, 1228800, null, 1, __WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_select_select__["a" /* Select */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_36_ionic_angular_navigation_deep_linker__["a" /* DeepLinker */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 6, { options: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_select_select__["a" /* Select */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](74, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](76, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_ProfilePage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](79, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_38__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](83, 0, null, null, 22, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](84, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 7, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 8, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 9, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](88, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](90, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](91, 16384, [[7, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Intolerances"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](94, 0, null, 3, 10, "ion-select", [["multiple", "true"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 95)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 95)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.currentProfile["intolerances"] = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_34__node_modules_ionic_angular_components_select_select_ngfactory__["b" /* View_Select_0 */], __WEBPACK_IMPORTED_MODULE_34__node_modules_ionic_angular_components_select_select_ngfactory__["a" /* RenderType_Select */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](95, 1228800, null, 1, __WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_select_select__["a" /* Select */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_36_ionic_angular_navigation_deep_linker__["a" /* DeepLinker */]], { multiple: [0, "multiple"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 10, { options: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_select_select__["a" /* Select */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](98, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](100, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_ProfilePage_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](103, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_38__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](107, 0, null, null, 36, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](108, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 11, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 12, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 13, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](112, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](114, 0, null, 1, 12, "ion-label", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](115, 16384, [[11, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            Protein Range (g)"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](117, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](119, 0, null, null, 2, "ion-badge", [["item-start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](120, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](121, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](123, 0, null, null, 2, "ion-badge", [["item-end", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](124, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](125, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](128, 0, null, 3, 14, "ion-range", [["dualKnobs", "true"], ["max", "50"], ["min", "0"], ["step", "1"]], [[2, "range-disabled", null], [2, "range-pressed", null], [2, "range-has-pin", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.currentProfile["protein_range"] = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["b" /* View_Range_0 */], __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["a" /* RenderType_Range */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](129, 1228800, null, 0, __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_42_ionic_angular_tap_click_haptic__["a" /* Haptic */], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ChangeDetectorRef */]], { min: [0, "min"], max: [1, "max"], step: [2, "step"], dualKnobs: [3, "dualKnobs"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](131, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](133, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](135, 0, null, 0, 2, "ion-label", [["range-left", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](136, 16384, [[11, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["0"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](139, 0, null, 1, 2, "ion-label", [["range-right", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](140, 16384, [[11, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["50"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](145, 0, null, null, 36, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](146, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 14, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 15, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 16, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](150, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](152, 0, null, 1, 12, "ion-label", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](153, 16384, [[14, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            Carb Range (g)"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](155, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](157, 0, null, null, 2, "ion-badge", [["item-start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](158, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](159, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](161, 0, null, null, 2, "ion-badge", [["item-end", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](162, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](163, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](166, 0, null, 3, 14, "ion-range", [["dualKnobs", "true"], ["max", "150"], ["min", "0"], ["step", "1"]], [[2, "range-disabled", null], [2, "range-pressed", null], [2, "range-has-pin", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.currentProfile["carb_range"] = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["b" /* View_Range_0 */], __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["a" /* RenderType_Range */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](167, 1228800, null, 0, __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_42_ionic_angular_tap_click_haptic__["a" /* Haptic */], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ChangeDetectorRef */]], { min: [0, "min"], max: [1, "max"], step: [2, "step"], dualKnobs: [3, "dualKnobs"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](169, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](171, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](173, 0, null, 0, 2, "ion-label", [["range-left", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](174, 16384, [[14, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["0"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](177, 0, null, 1, 2, "ion-label", [["range-right", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](178, 16384, [[14, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["150"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](183, 0, null, null, 36, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](184, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 17, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 18, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 19, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](188, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](190, 0, null, 1, 12, "ion-label", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](191, 16384, [[17, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            Fat Range (g)"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](193, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](195, 0, null, null, 2, "ion-badge", [["item-start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](196, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](197, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](199, 0, null, null, 2, "ion-badge", [["item-end", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](200, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](201, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](204, 0, null, 3, 14, "ion-range", [["dualKnobs", "true"], ["max", "50"], ["min", "0"], ["step", "1"]], [[2, "range-disabled", null], [2, "range-pressed", null], [2, "range-has-pin", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.currentProfile["fat_range"] = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["b" /* View_Range_0 */], __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["a" /* RenderType_Range */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](205, 1228800, null, 0, __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_42_ionic_angular_tap_click_haptic__["a" /* Haptic */], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ChangeDetectorRef */]], { min: [0, "min"], max: [1, "max"], step: [2, "step"], dualKnobs: [3, "dualKnobs"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](207, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](209, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](211, 0, null, 0, 2, "ion-label", [["range-left", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](212, 16384, [[17, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["0"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](215, 0, null, 1, 2, "ion-label", [["range-right", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](216, 16384, [[17, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["50"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](221, 0, null, null, 36, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](222, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 20, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 21, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 22, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](226, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_32_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](228, 0, null, 1, 12, "ion-label", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](229, 16384, [[20, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            Calorie Range"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](231, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](233, 0, null, null, 2, "ion-badge", [["item-start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](234, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](235, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](237, 0, null, null, 2, "ion-badge", [["item-end", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](238, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_39_ionic_angular_components_badge_badge__["a" /* Badge */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](239, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](242, 0, null, 3, 14, "ion-range", [["dualKnobs", "true"], ["max", "1500"], ["min", "0"], ["step", "10"]], [[2, "range-disabled", null], [2, "range-pressed", null], [2, "range-has-pin", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.currentProfile["calorie_range"] = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["b" /* View_Range_0 */], __WEBPACK_IMPORTED_MODULE_40__node_modules_ionic_angular_components_range_range_ngfactory__["a" /* RenderType_Range */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](243, 1228800, null, 0, __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */], [__WEBPACK_IMPORTED_MODULE_30_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_42_ionic_angular_tap_click_haptic__["a" /* Haptic */], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ChangeDetectorRef */]], { min: [0, "min"], max: [1, "max"], step: [2, "step"], dualKnobs: [3, "dualKnobs"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_range_range__["a" /* Range */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](245, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](247, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_37__angular_forms__["f" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](249, 0, null, 0, 2, "ion-label", [["range-left", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](250, 16384, [[20, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["0"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](253, 0, null, 1, 2, "ion-label", [["range-right", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](254, 16384, [[20, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["1500"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](261, 0, null, null, 6, "ion-footer", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](262, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_43_ionic_angular_components_toolbar_toolbar_footer__["a" /* Footer */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](264, 0, null, null, 2, "button", [["block", ""], ["color", "secondary"], ["ion-button", ""], ["round", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.saveProfile() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](265, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], round: [1, "round"], block: [2, "block"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Save Profile"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 12, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 17, 0, currVal_5); var currVal_18 = _co.currentProfile["diet"]; _ck(_v, 74, 0, currVal_18); var currVal_19 = _co.diets; _ck(_v, 79, 0, currVal_19); var currVal_28 = "true"; _ck(_v, 95, 0, currVal_28); var currVal_29 = _co.currentProfile["intolerances"]; _ck(_v, 98, 0, currVal_29); var currVal_30 = _co.intolerances; _ck(_v, 103, 0, currVal_30); var currVal_43 = "0"; var currVal_44 = "50"; var currVal_45 = "1"; var currVal_46 = "true"; _ck(_v, 129, 0, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_47 = _co.currentProfile["protein_range"]; _ck(_v, 131, 0, currVal_47); var currVal_60 = "0"; var currVal_61 = "150"; var currVal_62 = "1"; var currVal_63 = "true"; _ck(_v, 167, 0, currVal_60, currVal_61, currVal_62, currVal_63); var currVal_64 = _co.currentProfile["carb_range"]; _ck(_v, 169, 0, currVal_64); var currVal_77 = "0"; var currVal_78 = "50"; var currVal_79 = "1"; var currVal_80 = "true"; _ck(_v, 205, 0, currVal_77, currVal_78, currVal_79, currVal_80); var currVal_81 = _co.currentProfile["fat_range"]; _ck(_v, 207, 0, currVal_81); var currVal_94 = "0"; var currVal_95 = "1500"; var currVal_96 = "10"; var currVal_97 = "true"; _ck(_v, 243, 0, currVal_94, currVal_95, currVal_96, currVal_97); var currVal_98 = _co.currentProfile["calorie_range"]; _ck(_v, 245, 0, currVal_98); var currVal_99 = "secondary"; var currVal_100 = ""; var currVal_101 = ""; _ck(_v, 265, 0, currVal_99, currVal_100, currVal_101); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_2); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 17)._hidden; _ck(_v, 16, 0, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 28).statusbarPadding; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 28)._hasRefresher; _ck(_v, 27, 0, currVal_6, currVal_7); var currVal_8 = _co.imageString; _ck(_v, 39, 0, currVal_8); var currVal_9 = _co.profile["name"]; _ck(_v, 48, 0, currVal_9); var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 71)._disabled; var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassUntouched; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassTouched; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassPristine; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassDirty; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassValid; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassInvalid; var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassPending; _ck(_v, 70, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_20 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 95)._disabled; var currVal_21 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassUntouched; var currVal_22 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassTouched; var currVal_23 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassPristine; var currVal_24 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassDirty; var currVal_25 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassValid; var currVal_26 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassInvalid; var currVal_27 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 100).ngClassPending; _ck(_v, 94, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_31 = _co.currentProfile["protein_range"]["lower"]; _ck(_v, 121, 0, currVal_31); var currVal_32 = _co.currentProfile["protein_range"]["upper"]; _ck(_v, 125, 0, currVal_32); var currVal_33 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 129)._disabled; var currVal_34 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 129)._pressed; var currVal_35 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 129)._pin; var currVal_36 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassUntouched; var currVal_37 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassTouched; var currVal_38 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassPristine; var currVal_39 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassDirty; var currVal_40 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassValid; var currVal_41 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassInvalid; var currVal_42 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 133).ngClassPending; _ck(_v, 128, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42); var currVal_48 = _co.currentProfile["carb_range"]["lower"]; _ck(_v, 159, 0, currVal_48); var currVal_49 = _co.currentProfile["carb_range"]["upper"]; _ck(_v, 163, 0, currVal_49); var currVal_50 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 167)._disabled; var currVal_51 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 167)._pressed; var currVal_52 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 167)._pin; var currVal_53 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassUntouched; var currVal_54 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassTouched; var currVal_55 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassPristine; var currVal_56 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassDirty; var currVal_57 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassValid; var currVal_58 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassInvalid; var currVal_59 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 171).ngClassPending; _ck(_v, 166, 0, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_65 = _co.currentProfile["fat_range"]["lower"]; _ck(_v, 197, 0, currVal_65); var currVal_66 = _co.currentProfile["fat_range"]["upper"]; _ck(_v, 201, 0, currVal_66); var currVal_67 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 205)._disabled; var currVal_68 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 205)._pressed; var currVal_69 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 205)._pin; var currVal_70 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassUntouched; var currVal_71 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassTouched; var currVal_72 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassPristine; var currVal_73 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassDirty; var currVal_74 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassValid; var currVal_75 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassInvalid; var currVal_76 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 209).ngClassPending; _ck(_v, 204, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76); var currVal_82 = _co.currentProfile["calorie_range"]["lower"]; _ck(_v, 235, 0, currVal_82); var currVal_83 = _co.currentProfile["calorie_range"]["upper"]; _ck(_v, 239, 0, currVal_83); var currVal_84 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 243)._disabled; var currVal_85 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 243)._pressed; var currVal_86 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 243)._pin; var currVal_87 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassUntouched; var currVal_88 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassTouched; var currVal_89 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassPristine; var currVal_90 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassDirty; var currVal_91 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassValid; var currVal_92 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassInvalid; var currVal_93 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 247).ngClassPending; _ck(_v, 242, 0, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93); });
}
function View_ProfilePage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-profile", [], null, null, null, View_ProfilePage_0, RenderType_ProfilePage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_44__profile__["a" /* ProfilePage */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_45_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_46__providers_recipe_search_service_recipe_search_service__["a" /* RecipeSearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_47__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_48__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_49_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]], null, null)], null, null); }
var ProfilePageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-profile", __WEBPACK_IMPORTED_MODULE_44__profile__["a" /* ProfilePage */], View_ProfilePage_Host_0, {}, {}, []);






/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RecipeDetailPage */
/* unused harmony export View_RecipeDetailPage_0 */
/* unused harmony export View_RecipeDetailPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__ = /*@__PURE__*/__webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__ = /*@__PURE__*/__webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__ = /*@__PURE__*/__webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_note_note__ = /*@__PURE__*/__webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_list_list__ = /*@__PURE__*/__webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_gestures_gesture_controller__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = /*@__PURE__*/__webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_thumbnail_thumbnail__ = /*@__PURE__*/__webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_grid_row__ = /*@__PURE__*/__webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_grid_col__ = /*@__PURE__*/__webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_card_card__ = /*@__PURE__*/__webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_card_card_content__ = /*@__PURE__*/__webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_forms__ = /*@__PURE__*/__webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_segment_segment__ = /*@__PURE__*/__webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_segment_segment_button__ = /*@__PURE__*/__webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic_angular_components_toolbar_toolbar_footer__ = /*@__PURE__*/__webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_toolbar_toolbar_item__ = /*@__PURE__*/__webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__recipe_detail__ = /*@__PURE__*/__webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_text_to_speech_index__ = /*@__PURE__*/__webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_recipe_recipe__ = /*@__PURE__*/__webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ionic_angular_components_toast_toast_controller__ = /*@__PURE__*/__webpack_require__(75);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_note_note,ionic_angular_components_list_list,ionic_angular_platform_platform,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_angular_common,ionic_angular_components_thumbnail_thumbnail,ionic_angular_components_grid_row,ionic_angular_components_grid_col,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,ionic_angular_components_card_card,ionic_angular_components_card_card_content,_angular_forms,ionic_angular_components_segment_segment,_.._.._node_modules_ionic_angular_components_segment_segment_button.ngfactory,ionic_angular_components_segment_segment_button,ionic_angular_components_toolbar_toolbar_footer,ionic_angular_components_toolbar_toolbar_item,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,_recipe_detail,ionic_angular_navigation_nav_params,_.._providers_recipe_search_service_recipe_search_service,_ionic_native_text_to_speech_index,_.._providers_recipe_recipe,ionic_angular_components_toast_toast_controller PURE_IMPORTS_END */












































var styles_RecipeDetailPage = [];
var RenderType_RecipeDetailPage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_RecipeDetailPage, data: {} });

function View_RecipeDetailPage_2(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 12, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.readRecipe(_v.context.$implicit["step"]) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 2, 2, "ion-note", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_note_note__["a" /* Note */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](9, null, ["\n                      ", "\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](11, 0, null, 2, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](12, 2, ["\n                  ", "\n              "]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 9, 0, currVal_0); var currVal_1 = _v.context.$implicit["step"]; _ck(_v, 12, 0, currVal_1); });
}
function View_RecipeDetailPage_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](2, 0, null, null, 1, "h3", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Steps"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](5, 0, null, null, 5, "ion-list", [["scroll", "true"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeDetailPage_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](9, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recipeSteps; _ck(_v, 9, 0, currVal_0); }, null); }
function View_RecipeDetailPage_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 5, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 6, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 7, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 0, 4, "ion-thumbnail", [["item-start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_thumbnail_thumbnail__["a" /* Thumbnail */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](10, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](13, 0, null, 2, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n              "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit["image"]; _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit["originalString"]; _ck(_v, 14, 0, currVal_1); }); }
function View_RecipeDetailPage_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](2, 0, null, null, 1, "h3", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Ingredients"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](5, 0, null, null, 5, "ion-list", [["scroll", "true"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeDetailPage_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](9, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recipeIngredients; _ck(_v, 9, 0, currVal_0); }, null); }
function View_RecipeDetailPage_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 8, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 9, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 10, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 2, 10, "ion-row", [["class", "row"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_grid_row__["a" /* Row */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](10, 0, null, null, 2, "ion-col", [["class", "col"], ["col-6", ""], ["text-left", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_grid_col__["a" /* Col */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](12, null, ["\n                            ", "\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](14, 0, null, null, 2, "ion-col", [["class", "col"], ["col-6", ""], ["text-right", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_grid_col__["a" /* Col */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](16, null, ["\n                            ", "\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n                "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit["title"]; _ck(_v, 12, 0, currVal_0); var currVal_1 = ((_v.context.$implicit["amount"] + " ") + _v.context.$implicit["unit"]); _ck(_v, 16, 0, currVal_1); }); }
function View_RecipeDetailPage_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](2, 0, null, null, 1, "h3", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Nutrition"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](5, 0, null, null, 5, "ion-list", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeDetailPage_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](9, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recipeNutrients; _ck(_v, 9, 0, currVal_0); }, null); }
function View_RecipeDetailPage_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](4, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_20_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_22__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_22__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Recipe Details"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](13, 0, null, null, 52, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_25__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_25__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](14, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_27_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 1, 1, "h2", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](19, 0, null, 1, 10, "ion-card", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_card_card__["a" /* Card */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](22, 0, null, null, 6, "ion-card-content", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_card_card_content__["a" /* CardContent */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](25, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](31, 0, null, 1, 18, "ion-segment", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "segment-disabled", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.view = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](32, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_30__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_30__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_30__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](34, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_30__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_30__angular_forms__["f" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](35, 1196032, null, 1, __WEBPACK_IMPORTED_MODULE_31_ionic_angular_components_segment_segment__["a" /* Segment */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_30__angular_forms__["f" /* NgControl */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](38, 0, null, null, 2, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "Ingredients"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 39).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__["b" /* View_SegmentButton_0 */], __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__["a" /* RenderType_SegmentButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](39, 114688, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_segment_segment_button__["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            Ingredients\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](42, 0, null, null, 2, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "Steps"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 43).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__["b" /* View_SegmentButton_0 */], __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__["a" /* RenderType_SegmentButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](43, 114688, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_segment_segment_button__["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            Steps\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](46, 0, null, null, 2, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "Nutrition"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 47).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__["b" /* View_SegmentButton_0 */], __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_segment_segment_button_ngfactory__["a" /* RenderType_SegmentButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](47, 114688, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_33_ionic_angular_components_segment_segment_button__["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n            Nutrition\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](51, 0, null, 1, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](53, 0, null, 1, 11, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](54, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["m" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeDetailPage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](57, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["n" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeDetailPage_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](60, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["n" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeDetailPage_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](63, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["n" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](67, 0, null, null, 15, "ion-footer", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](68, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_34_ionic_angular_components_toolbar_toolbar_footer__["a" /* Footer */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](70, 0, null, null, 11, "ion-buttons", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](71, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_35_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 11, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](74, 0, null, null, 2, "button", [["color", "secondary"], ["ion-button", ""], ["outline", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addRecipe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_36__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_36__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](75, 1097728, [[11, 4]], 0, __WEBPACK_IMPORTED_MODULE_37_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], outline: [1, "outline"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Favorite"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](78, 0, null, null, 2, "button", [["color", "danger"], ["ion-button", ""], ["outline", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onClose() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_36__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_36__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](79, 1097728, [[11, 4]], 0, __WEBPACK_IMPORTED_MODULE_37_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], outline: [1, "outline"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Close"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_14 = _co.view; _ck(_v, 32, 0, currVal_14); var currVal_18 = "Ingredients"; _ck(_v, 39, 0, currVal_18); var currVal_22 = "Steps"; _ck(_v, 43, 0, currVal_22); var currVal_26 = "Nutrition"; _ck(_v, 47, 0, currVal_26); var currVal_27 = _co.view; _ck(_v, 54, 0, currVal_27); var currVal_28 = "Steps"; _ck(_v, 57, 0, currVal_28); var currVal_29 = "Ingredients"; _ck(_v, 60, 0, currVal_29); var currVal_30 = "Nutrition"; _ck(_v, 63, 0, currVal_30); var currVal_31 = "secondary"; var currVal_32 = ""; _ck(_v, 75, 0, currVal_31, currVal_32); var currVal_33 = "danger"; var currVal_34 = ""; _ck(_v, 79, 0, currVal_33, currVal_34); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 5)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 14).statusbarPadding; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_4 = _co.recipe.title; _ck(_v, 17, 0, currVal_4); var currVal_5 = _co.recipe.image; _ck(_v, 25, 0, currVal_5); var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassUntouched; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassTouched; var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassPristine; var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassDirty; var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassValid; var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassInvalid; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 34).ngClassPending; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 35)._disabled; _ck(_v, 31, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 39)._disabled; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 39).isActive; var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 39).isActive; _ck(_v, 38, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 43)._disabled; var currVal_20 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 43).isActive; var currVal_21 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 43).isActive; _ck(_v, 42, 0, currVal_19, currVal_20, currVal_21); var currVal_23 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 47)._disabled; var currVal_24 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 47).isActive; var currVal_25 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 47).isActive; _ck(_v, 46, 0, currVal_23, currVal_24, currVal_25); });
}
function View_RecipeDetailPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-recipe-detail", [], null, null, null, View_RecipeDetailPage_0, RenderType_RecipeDetailPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_38__recipe_detail__["a" /* RecipeDetailPage */], [__WEBPACK_IMPORTED_MODULE_21_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_39_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_17_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_40__providers_recipe_search_service_recipe_search_service__["a" /* RecipeSearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_41__ionic_native_text_to_speech_index__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_42__providers_recipe_recipe__["a" /* RecipeProvider */], __WEBPACK_IMPORTED_MODULE_43_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]], null, null)], null, null); }
var RecipeDetailPageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-recipe-detail", __WEBPACK_IMPORTED_MODULE_38__recipe_detail__["a" /* RecipeDetailPage */], View_RecipeDetailPage_Host_0, {}, {}, []);






/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LoginPage */
/* unused harmony export View_LoginPage_0 */
/* unused harmony export View_LoginPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toolbar_toolbar_item__ = /*@__PURE__*/__webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_menu_menu_toggle__ = /*@__PURE__*/__webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_app_menu_controller__ = /*@__PURE__*/__webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_icon_icon__ = /*@__PURE__*/__webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login__ = /*@__PURE__*/__webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_auth__ = /*@__PURE__*/__webpack_require__(29);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_login,ionic_angular_navigation_nav_params,_.._providers_auth_auth PURE_IMPORTS_END */

























var styles_LoginPage = [];
var RenderType_LoginPage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_LoginPage, data: {} });

function View_LoginPage_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](3, 0, null, null, 21, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](6, 0, null, 1, 13, "ion-buttons", [["start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](7, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](10, 0, null, null, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](12, 1064960, null, 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_menu_menu_toggle__["a" /* MenuToggle */], [__WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_app_menu_controller__["a" /* MenuController */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_button_button__["a" /* Button */]], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](13, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](17, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](21, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_15__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_15__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](22, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Login"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](27, 0, null, null, 12, "ion-content", [["padding", ""], ["text-center", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](28, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](30, 0, null, 1, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Login with Facebook to get access to the best recipes in the world!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](33, 0, null, 1, 5, "button", [["icon-right", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.login() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](34, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n    Login with\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](36, 0, null, 0, 1, "ion-icon", [["name", "logo-facebook"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](37, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 12, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 17, 0, currVal_5); var currVal_9 = "logo-facebook"; _ck(_v, 37, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_2); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 17)._hidden; _ck(_v, 16, 0, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 28).statusbarPadding; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 28)._hasRefresher; _ck(_v, 27, 0, currVal_6, currVal_7); var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 37)._hidden; _ck(_v, 36, 0, currVal_8); });
}
function View_LoginPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-login", [], null, null, null, View_LoginPage_0, RenderType_LoginPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_22__login__["a" /* LoginPage */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_23_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_24__providers_auth_auth__["a" /* AuthProvider */]], null, null)], null, null); }
var LoginPageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-login", __WEBPACK_IMPORTED_MODULE_22__login__["a" /* LoginPage */], View_LoginPage_Host_0, {}, {}, []);






/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RecipeListPage */
/* unused harmony export View_RecipeListPage_0 */
/* unused harmony export View_RecipeListPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__ = /*@__PURE__*/__webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__ = /*@__PURE__*/__webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__ = /*@__PURE__*/__webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_thumbnail_thumbnail__ = /*@__PURE__*/__webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_list_list__ = /*@__PURE__*/__webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_gestures_gesture_controller__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common__ = /*@__PURE__*/__webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__recipe_list__ = /*@__PURE__*/__webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_modal_modal_controller__ = /*@__PURE__*/__webpack_require__(71);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_thumbnail_thumbnail,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_angular_common,_recipe_list,ionic_angular_navigation_nav_params,_.._providers_recipe_search_service_recipe_search_service,ionic_angular_components_modal_modal_controller PURE_IMPORTS_END */





























var styles_RecipeListPage = [];
var RenderType_RecipeListPage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_RecipeListPage, data: {} });

function View_RecipeListPage_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 15, "button", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.selectRecipe(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 1, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 3, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 0, 4, "ion-thumbnail", [["item-start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_thumbnail_thumbnail__["a" /* Thumbnail */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](10, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](13, 0, null, 2, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.image; _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_1); });
}
function View_RecipeListPage_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_14__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_14__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](7, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Search Results"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](12, 0, null, null, 10, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](13, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_23_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeListPage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](20, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_24__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.recipes; _ck(_v, 20, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_RecipeListPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-recipe-list", [], null, null, null, View_RecipeListPage_0, RenderType_RecipeListPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_25__recipe_list__["a" /* RecipeListPage */], [__WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_26_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_27__providers_recipe_search_service_recipe_search_service__["a" /* RecipeSearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]], null, null)], null, null); }
var RecipeListPageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-recipe-list", __WEBPACK_IMPORTED_MODULE_25__recipe_list__["a" /* RecipeListPage */], View_RecipeListPage_Host_0, {}, {}, []);






/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RecipeSearchPage */
/* unused harmony export View_RecipeSearchPage_0 */
/* unused harmony export View_RecipeSearchPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeSearchPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_sliding_ngfactory__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item_sliding__ = /*@__PURE__*/__webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_list_list__ = /*@__PURE__*/__webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item__ = /*@__PURE__*/__webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_form__ = /*@__PURE__*/__webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_item_item_reorder__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_item_item_content__ = /*@__PURE__*/__webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_label_label__ = /*@__PURE__*/__webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_ionic_angular_components_radio_radio_button_ngfactory__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_radio_radio_button__ = /*@__PURE__*/__webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_radio_radio_group__ = /*@__PURE__*/__webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_item_item_options__ = /*@__PURE__*/__webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_icon_icon__ = /*@__PURE__*/__webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_item__ = /*@__PURE__*/__webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular_components_menu_menu_toggle__ = /*@__PURE__*/__webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_app_menu_controller__ = /*@__PURE__*/__webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_toolbar_toolbar_ngfactory__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_searchbar_searchbar_ngfactory__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_forms__ = /*@__PURE__*/__webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic_angular_components_searchbar_searchbar__ = /*@__PURE__*/__webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_angular_gestures_gesture_controller__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common__ = /*@__PURE__*/__webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_toolbar_toolbar_footer__ = /*@__PURE__*/__webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__recipe_search__ = /*@__PURE__*/__webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ionic_angular_components_alert_alert_controller__ = /*@__PURE__*/__webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic_angular_components_modal_modal_controller__ = /*@__PURE__*/__webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item_sliding.ngfactory,ionic_angular_components_item_item_sliding,ionic_angular_components_list_list,ionic_angular_platform_platform,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_radio_radio_button.ngfactory,ionic_angular_components_radio_radio_button,ionic_angular_components_radio_radio_group,ionic_angular_components_item_item_options,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_icon_icon,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,_.._.._node_modules_ionic_angular_components_searchbar_searchbar.ngfactory,_angular_forms,ionic_angular_components_searchbar_searchbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_gestures_gesture_controller,_angular_common,ionic_angular_components_toolbar_toolbar_footer,_recipe_search,ionic_angular_navigation_nav_params,ionic_angular_components_alert_alert_controller,ionic_angular_components_modal_modal_controller,_.._providers_recipe_search_service_recipe_search_service PURE_IMPORTS_END */















































var styles_RecipeSearchPage = [];
var RenderType_RecipeSearchPage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_RecipeSearchPage, data: {} });

function View_RecipeSearchPage_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 30, "ion-item-sliding", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_sliding_ngfactory__["b" /* View_ItemSliding_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_sliding_ngfactory__["a" /* RenderType_ItemSliding */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 2, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item_sliding__["a" /* ItemSliding */], [[2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_list_list__["a" /* List */]], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 6, { item: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 7, { _itemOptions: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](5, 0, null, 0, 13, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](6, 1097728, [[6, 4]], 3, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 8, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 9, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 10, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](12, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](13, 16384, [[8, 4]], 0, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 4, 1, "ion-radio", [], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 17)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_12__node_modules_ionic_angular_components_radio_radio_button_ngfactory__["b" /* View_RadioButton_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_ionic_angular_components_radio_radio_button_ngfactory__["a" /* RenderType_RadioButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](17, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_radio_radio_button__["a" /* RadioButton */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item__["a" /* Item */]], [2, __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_radio_radio_group__["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](20, 0, null, 1, 9, "ion-item-options", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](21, 16384, [[7, 4]], 0, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_item_item_options__["a" /* ItemOptions */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](23, 0, null, null, 5, "button", [["color", "danger"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.removeIngredient(_v.context.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](24, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](26, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](27, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n                  Delete\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 17, 0, currVal_2); var currVal_3 = "danger"; _ck(_v, 24, 0, currVal_3); var currVal_5 = "trash"; _ck(_v, 27, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 14, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 17)._disabled; _ck(_v, 16, 0, currVal_1); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 27)._hidden; _ck(_v, 26, 0, currVal_4); });
}
function View_RecipeSearchPage_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 58, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_20_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](3, 0, null, null, 35, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_21__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_21__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_20_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](6, 0, null, 1, 13, "ion-buttons", [["start", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](7, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](10, 0, null, null, 8, "button", [["ion-button", ""], ["menuToggle", ""], ["start", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](12, 1064960, null, 0, __WEBPACK_IMPORTED_MODULE_27_ionic_angular_components_menu_menu_toggle__["a" /* MenuToggle */], [__WEBPACK_IMPORTED_MODULE_28_ionic_angular_components_app_menu_controller__["a" /* MenuController */], [2, __WEBPACK_IMPORTED_MODULE_20_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__["a" /* Button */]], [2, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](13, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](17, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](21, 0, null, 2, 10, "ion-buttons", [["end", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](22, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](25, 0, null, null, 5, "button", [["icon-only", ""], ["ion-button", ""], ["right", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.cameraSearch() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](26, 1097728, [[3, 4]], 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](28, 0, null, 0, 1, "ion-icon", [["name", "camera"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](29, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](33, 0, null, 3, 2, "ion-title", [["text-center", ""]], null, null, null, __WEBPACK_IMPORTED_MODULE_29__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_29__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](34, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_30_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["VisChef"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](37, 0, null, 3, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](40, 0, null, null, 17, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_toolbar_toolbar_ngfactory__["b" /* View_Toolbar_0 */], __WEBPACK_IMPORTED_MODULE_31__node_modules_ionic_angular_components_toolbar_toolbar_ngfactory__["a" /* RenderType_Toolbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](41, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](43, 0, null, 3, 13, "ion-buttons", [["text-center", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](44, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_26_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_22_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](603979776, 4, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](47, 0, null, null, 4, "ion-searchbar", [["left", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.searchString = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_searchbar_searchbar_ngfactory__["b" /* View_Searchbar_0 */], __WEBPACK_IMPORTED_MODULE_32__node_modules_ionic_angular_components_searchbar_searchbar_ngfactory__["a" /* RenderType_Searchbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](48, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_33__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](50, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_33__angular_forms__["f" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](51, 1294336, null, 0, __WEBPACK_IMPORTED_MODULE_34_ionic_angular_components_searchbar_searchbar__["a" /* Searchbar */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["f" /* NgControl */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](53, 0, null, null, 2, "button", [["center", ""], ["ion-button", ""], ["left", ""], ["outline", ""], ["small", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.enterIngredient() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](54, 1097728, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { small: [0, "small"], outline: [1, "outline"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Add Ingredient"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](60, 0, null, null, 22, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_35__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_35__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](61, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_36_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_37_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_38_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_20_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](64, 0, null, 1, 1, "h4", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["What's in your kitchen today?"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](67, 0, null, 1, 1, "h5", [["text-center", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["Select one item as a search key"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](70, 0, null, 1, 11, "ion-list", [["radio-group", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.searchKey = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](71, 1064960, null, 1, __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_radio_radio_group__["a" /* RadioGroup */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ChangeDetectorRef */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵqud */](335544320, 5, { _header: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_radio_radio_group__["a" /* RadioGroup */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](74, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_33__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](76, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_33__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_33__angular_forms__["f" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](77, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_39_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_37_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ɵand */](16777216, null, null, 1, null, View_RecipeSearchPage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](80, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_40__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](84, 0, null, null, 6, "ion-footer", [["text-right", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](85, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_41_ionic_angular_components_toolbar_toolbar_footer__["a" /* Footer */], [__WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_20_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](87, 0, null, null, 2, "button", [["block", ""], ["color", "secondary"], ["ion-button", ""], ["round", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.search() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](88, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], round: [1, "round"], block: [2, "block"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Search"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 12, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 17, 0, currVal_5); var currVal_7 = "camera"; _ck(_v, 29, 0, currVal_7); var currVal_22 = _co.searchString; _ck(_v, 48, 0, currVal_22); _ck(_v, 51, 0); var currVal_23 = ""; var currVal_24 = ""; _ck(_v, 54, 0, currVal_23, currVal_24); var currVal_34 = _co.searchKey; _ck(_v, 74, 0, currVal_34); var currVal_35 = _co.ingredients; _ck(_v, 80, 0, currVal_35); var currVal_36 = "secondary"; var currVal_37 = ""; var currVal_38 = ""; _ck(_v, 88, 0, currVal_36, currVal_37, currVal_38); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_2); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 17)._hidden; _ck(_v, 16, 0, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 29)._hidden; _ck(_v, 28, 0, currVal_6); var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 41)._sbPadding; _ck(_v, 40, 0, currVal_8); var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassUntouched; var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassTouched; var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassPristine; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassDirty; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassValid; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassInvalid; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 50).ngClassPending; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 51)._animated; var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 51)._value; var currVal_18 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 51)._isActive; var currVal_19 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 51)._showCancelButton; var currVal_20 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 51)._shouldAlignLeft; var currVal_21 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 51)._isFocus; _ck(_v, 47, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_25 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 61).statusbarPadding; var currVal_26 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 61)._hasRefresher; _ck(_v, 60, 0, currVal_25, currVal_26); var currVal_27 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassUntouched; var currVal_28 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassTouched; var currVal_29 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassPristine; var currVal_30 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassDirty; var currVal_31 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassValid; var currVal_32 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassInvalid; var currVal_33 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 76).ngClassPending; _ck(_v, 70, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); });
}
function View_RecipeSearchPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-recipe-search", [], null, null, null, View_RecipeSearchPage_0, RenderType_RecipeSearchPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_42__recipe_search__["a" /* RecipeSearchPage */], [__WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_43_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_44_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_45_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_46__providers_recipe_search_service_recipe_search_service__["a" /* RecipeSearchServiceProvider */]], null, null)], null, null); }
var RecipeSearchPageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-recipe-search", __WEBPACK_IMPORTED_MODULE_42__recipe_search__["a" /* RecipeSearchPage */], View_RecipeSearchPage_Host_0, {}, {}, []);






/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_TextSearchPage */
/* unused harmony export View_TextSearchPage_0 */
/* unused harmony export View_TextSearchPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextSearchPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toolbar_toolbar_header__ = /*@__PURE__*/__webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = /*@__PURE__*/__webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_app__ = /*@__PURE__*/__webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar_title__ = /*@__PURE__*/__webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_toolbar__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_platform_dom_controller__ = /*@__PURE__*/__webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_platform_keyboard__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_searchbar_searchbar_ngfactory__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = /*@__PURE__*/__webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_searchbar_searchbar__ = /*@__PURE__*/__webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__text_search__ = /*@__PURE__*/__webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_navigation_nav_params__ = /*@__PURE__*/__webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_.._.._node_modules_ionic_angular_components_searchbar_searchbar.ngfactory,_angular_forms,ionic_angular_components_searchbar_searchbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,_text_search,ionic_angular_navigation_nav_params,_.._providers_recipe_search_service_recipe_search_service PURE_IMPORTS_END */
























var styles_TextSearchPage = [];
var RenderType_TextSearchPage = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_TextSearchPage, data: {} });

function View_TextSearchPage_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](4, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](5, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](7, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](8, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Text Search"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](13, 0, null, null, 13, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](14, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_15_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](16, 0, null, 1, 4, "ion-searchbar", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.inputTerm = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_searchbar_searchbar_ngfactory__["b" /* View_Searchbar_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_searchbar_searchbar_ngfactory__["a" /* RenderType_Searchbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](17, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["f" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_17__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["g" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_17__angular_forms__["f" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](20, 1294336, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_searchbar_searchbar__["a" /* Searchbar */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["f" /* NgControl */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](23, 0, null, 1, 2, "button", [["color", "orange"], ["full", ""], ["ion-button", ""], ["round", ""], ["text-center", ""]], null, [[null, "tap"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("tap" === en)) {
                var pd_0 = (_co.textSearch() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_19__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_19__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](24, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_20_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Renderer */]], { color: [0, "color"], round: [1, "round"], full: [2, "full"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 0, ["Search"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_17 = _co.inputTerm; _ck(_v, 17, 0, currVal_17); _ck(_v, 20, 0); var currVal_18 = "orange"; var currVal_19 = ""; var currVal_20 = ""; _ck(_v, 24, 0, currVal_18, currVal_19, currVal_20); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 5)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 14).statusbarPadding; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassTouched; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassPristine; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassDirty; var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassValid; var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 19).ngClassPending; var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 20)._animated; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 20)._value; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 20)._isActive; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 20)._showCancelButton; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 20)._shouldAlignLeft; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵnov */](_v, 20)._isFocus; _ck(_v, 16, 1, [currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); });
}
function View_TextSearchPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ɵeld */](0, 0, null, null, 1, "page-text-search", [], null, null, null, View_TextSearchPage_0, RenderType_TextSearchPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_21__text_search__["a" /* TextSearchPage */], [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_22_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_23__providers_recipe_search_service_recipe_search_service__["a" /* RecipeSearchServiceProvider */]], null, null)], null, null); }
var TextSearchPageNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ɵccf */]("page-text-search", __WEBPACK_IMPORTED_MODULE_21__text_search__["a" /* TextSearchPage */], View_TextSearchPage_Host_0, {}, {}, []);






/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@ionic-native/camera/index.js
var camera = __webpack_require__(98);

// EXTERNAL MODULE: ./src/pages/home/home.ts
var home = __webpack_require__(108);

// EXTERNAL MODULE: ./src/pages/login/login.ts
var login = __webpack_require__(114);

// EXTERNAL MODULE: ./src/pages/recipe-search/recipe-search.ts
var recipe_search = __webpack_require__(115);

// EXTERNAL MODULE: ./src/pages/profile/profile.ts
var profile = __webpack_require__(112);

// EXTERNAL MODULE: ./src/providers/auth/auth.ts
var auth = __webpack_require__(29);

// CONCATENATED MODULE: ./src/app/app.component.ts












var app_component_MyApp = /*@__PURE__*/ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, authProvider) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.authProvider = authProvider;
        this.homePage = login["a" /* LoginPage */];
        this.profilePage = profile["a" /* ProfilePage */];
        this.recipeSearchPage = recipe_search["a" /* RecipeSearchPage */];
        this.loginPage = login["a" /* LoginPage */];
        this.isAuthenticated = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        console.log("LOADING");
        this.authProvider.getEmitter().subscribe(function (data) {
            _this.isAuthenticated = data;
            if (data) {
                _this.homePage = home["a" /* HomePage */];
                _this.nav.setRoot(home["a" /* HomePage */]);
            }
            else {
                _this.homePage = login["a" /* LoginPage */];
                _this.nav.setRoot(login["a" /* LoginPage */]);
            }
        });
        /*console.log("CHECKING LOGIN");
        this.authProvider.isLoggedIn().then(data => {
            if (data.status === "connected") {
                console.log("IS CONNECTED");
                this.isAuthenticated = true;
                this.homePage = HomePage
            } else {
                console.log("NOT CONNECTED");
                this.isAuthenticated = false;
                this.homePage = LoginPage
            }
        })
        .catch(error => {
            console.log("ERROR");
            console.log(error);
        })*/
    }
    MyApp.prototype.ionViewWillLoad = function () {
    };
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.authProvider.logout().then(function (data) {
            _this.isAuthenticated = false;
            _this.homePage = login["a" /* LoginPage */];
            _this.nav.setRoot(login["a" /* LoginPage */]);
            _this.menuCtrl.close();
        }).catch(function (e) {
            console.log("ERROR:");
            console.log(e);
        });
    };
    return MyApp;
}());





// EXTERNAL MODULE: ./src/pages/image-search/image-search.ts
var image_search = __webpack_require__(111);

// EXTERNAL MODULE: ./src/pages/text-search/text-search.ts
var text_search = __webpack_require__(116);

// EXTERNAL MODULE: ./src/pages/recipe-list/recipe-list.ts
var recipe_list = __webpack_require__(77);

// EXTERNAL MODULE: ./src/pages/recipe-detail/recipe-detail.ts
var recipe_detail = __webpack_require__(113);

// CONCATENATED MODULE: ./src/components/cuisine-selection/cuisine-selection.ts



var cuisine_selection_CuisineSelectionComponent = /*@__PURE__*/ (function () {
    function CuisineSelectionComponent() {
        this.onSearch = new core["l" /* EventEmitter */]();
    }
    CuisineSelectionComponent.prototype.ngOnInit = function () {
        this.selectedCuisines = [];
    };
    CuisineSelectionComponent.prototype.enter = function () {
        this.onSearch.emit(this.selectedCuisines);
    };
    return CuisineSelectionComponent;
}());





// EXTERNAL MODULE: ./src/providers/recipe-search-service/recipe-search-service.ts
var recipe_search_service = __webpack_require__(33);

// EXTERNAL MODULE: ./src/providers/camera-search/camera-search.ts
var camera_search = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/@ionic-native/facebook/index.js
var facebook = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/@ionic-native/text-to-speech/index.js
var text_to_speech = __webpack_require__(76);

// EXTERNAL MODULE: ./src/providers/profile/profile.ts
var profile_profile = __webpack_require__(107);

// EXTERNAL MODULE: ./src/providers/recipe/recipe.ts
var recipe = __webpack_require__(60);

// CONCATENATED MODULE: ./src/app/app.module.ts

























var AppModule = /*@__PURE__*/ (function () {
    function AppModule() {
    }
    return AppModule;
}());





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.ngfactory.js
var menu_ngfactory = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.js + 1 modules
var menu = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.ngfactory.js
var toolbar_ngfactory = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(19);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_icon_icon,_.._node_modules_ionic_angular_components_menu_menu.ngfactory,ionic_angular_components_split_pane_split_pane,ionic_angular_components_menu_menu,ionic_angular_components_app_menu_controller,ionic_angular_platform_platform,ionic_angular_platform_keyboard,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,ionic_angular_components_toolbar_toolbar,_.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_navbar,_.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_navigation_nav_controller,ionic_angular_components_list_list,_angular_common,_.._node_modules_ionic_angular_components_nav_nav.ngfactory,ionic_angular_components_nav_nav,ionic_angular_transitions_transition_controller,ionic_angular_navigation_deep_linker,_app.component,_ionic_native_status_bar_index,_ionic_native_splash_screen_index,_providers_auth_auth PURE_IMPORTS_END */





































var styles_MyApp = [];
var RenderType_MyApp = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_1(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "button", [["class", "item item-block"], ["color", "redBackground"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onLoad(_co.homePage) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 6, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["item-left", ""], ["name", "home"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](8, 147456, [[6, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                My Recipes\n            "]))], function (_ck, _v) { var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "home"; _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_13" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_1); });
}
function View_MyApp_2(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "button", [["class", "item item-block"], ["color", "redBackground"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onLoad(_co.recipeSearchPage) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 9, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["item-left", ""], ["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](8, 147456, [[9, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                Search for Recipes\n            "]))], function (_ck, _v) { var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "search"; _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_13" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_1); });
}
function View_MyApp_3(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "button", [["class", "item item-block"], ["color", "redBackground"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onLoad(_co.profilePage) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 12, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["item-left", ""], ["name", "person"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](8, 147456, [[12, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                My Diet Profile\n            "]))], function (_ck, _v) { var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "person"; _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_13" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_1); });
}
function View_MyApp_4(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 6, "button", [["class", "item item-block"], ["color", "redBackground"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.logout() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 15, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                Logout\n            "]))], function (_ck, _v) { var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); }, null);
}
function View_MyApp_5(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 6, "button", [["class", "item item-block"], ["color", "redBackground"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onLoad(_co.loginPage) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 18, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                Login\n            "]))], function (_ck, _v) { var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); }, null);
}
function View_MyApp_6(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 6, "button", [["class", "item item-block"], ["color", "redBackground"], ["ion-item", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 21, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                Learn More\n            "]))], function (_ck, _v) { var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_MyApp_0(_l) { return core["_19" /* ɵvid */](0, [core["_16" /* ɵqud */](402653184, 1, { nav: 0 }), (_l()(), core["Z" /* ɵeld */](1, 0, null, null, 44, "ion-menu", [["role", "navigation"]], null, null, null, menu_ngfactory["b" /* View_Menu_0 */], menu_ngfactory["a" /* RenderType_Menu */])), core["_15" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [menu["a" /* Menu */]]), core["Y" /* ɵdid */](3, 245760, null, 2, menu["a" /* Menu */], [menu_controller["a" /* MenuController */], core["j" /* ElementRef */], config["a" /* Config */], platform_platform["a" /* Platform */], core["z" /* Renderer */], keyboard["a" /* Keyboard */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], app["a" /* App */]], { content: [0, "content"] }, null), core["_16" /* ɵqud */](335544320, 2, { menuContent: 0 }), core["_16" /* ɵqud */](335544320, 3, { menuNav: 0 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 10, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](8, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 6, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["Y" /* ɵdid */](11, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n            "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](14, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["Menu"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, 0, 25, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](20, 4374528, [[2, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["Z" /* ɵeld */](22, 0, null, 1, 21, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](23, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_1)), core["Y" /* ɵdid */](26, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_2)), core["Y" /* ɵdid */](29, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_3)), core["Y" /* ɵdid */](32, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_4)), core["Y" /* ɵdid */](35, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_5)), core["Y" /* ɵdid */](38, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_6)), core["Y" /* ɵdid */](41, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](47, 0, null, null, 2, "ion-nav", [], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_15" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), core["Y" /* ɵdid */](49, 4374528, [[1, 4], ["nav", 4]], 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["u" /* NgZone */], core["z" /* Renderer */], core["i" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["k" /* ErrorHandler */]], { root: [0, "root"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 49); _ck(_v, 3, 0, currVal_0); var currVal_4 = _co.isAuthenticated; _ck(_v, 26, 0, currVal_4); var currVal_5 = _co.isAuthenticated; _ck(_v, 29, 0, currVal_5); var currVal_6 = _co.isAuthenticated; _ck(_v, 32, 0, currVal_6); var currVal_7 = _co.isAuthenticated; _ck(_v, 35, 0, currVal_7); var currVal_8 = !_co.isAuthenticated; _ck(_v, 38, 0, currVal_8); var currVal_9 = !_co.isAuthenticated; _ck(_v, 41, 0, currVal_9); var currVal_10 = _co.homePage; _ck(_v, 49, 0, currVal_10); }, function (_ck, _v) { var currVal_1 = core["_13" /* ɵnov */](_v, 11)._sbPadding; _ck(_v, 10, 0, currVal_1); var currVal_2 = core["_13" /* ɵnov */](_v, 20).statusbarPadding; var currVal_3 = core["_13" /* ɵnov */](_v, 20)._hasRefresher; _ck(_v, 19, 0, currVal_2, currVal_3); }); }
function View_MyApp_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["Y" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */], menu_controller["a" /* MenuController */], auth["a" /* AuthProvider */]], null, null)], null, null); }
var MyAppNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/thumbnail/thumbnail.js
var thumbnail = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-toggle.js
var menu_toggle = __webpack_require__(57);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_thumbnail_thumbnail,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_angular_common,_home,_.._providers_auth_auth,_.._providers_recipe_recipe PURE_IMPORTS_END */


































var styles_HomePage = [];
var RenderType_HomePage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_1(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 5, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 4, "ion-thumbnail", [["item-start", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](8, 16384, null, 0, thumbnail["a" /* Thumbnail */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 2, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](14, null, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit["image"]; _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit["title"]; _ck(_v, 14, 0, currVal_1); }); }
function View_HomePage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 25, "ion-header", [["color", "redBackground"]], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 21, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 1, 13, "ion-buttons", [["start", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](12, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n          "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](17, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](22, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      My Recipes\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["Z" /* ɵeld */](27, 0, null, null, 15, "ion-content", [["padding", ""], ["text-center", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](28, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](30, 0, null, 1, 0, "img", [["src", "assets/imgs/logo_bowl.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](32, 0, null, 1, 1, "h1", [["text-center", ""]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["All Recipes"])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](36, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](37, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_HomePage_1)), core["Y" /* ɵdid */](40, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "redBackground"; _ck(_v, 1, 0, currVal_0); var currVal_4 = ""; _ck(_v, 12, 0, currVal_4); var currVal_6 = "menu"; _ck(_v, 17, 0, currVal_6); var currVal_9 = _co.recipes; _ck(_v, 40, 0, currVal_9); }, function (_ck, _v) { var currVal_1 = core["_13" /* ɵnov */](_v, 4)._hidden; var currVal_2 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = core["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_3); var currVal_5 = core["_13" /* ɵnov */](_v, 17)._hidden; _ck(_v, 16, 0, currVal_5); var currVal_7 = core["_13" /* ɵnov */](_v, 28).statusbarPadding; var currVal_8 = core["_13" /* ɵnov */](_v, 28)._hasRefresher; _ck(_v, 27, 0, currVal_7, currVal_8); });
}
function View_HomePage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["Y" /* ɵdid */](1, 114688, null, 0, home["a" /* HomePage */], [nav_controller["a" /* NavController */], auth["a" /* AuthProvider */], recipe["a" /* RecipeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomePageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-home", home["a" /* HomePage */], View_HomePage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/pages/recipe-search/recipe-search.ngfactory.js
var recipe_search_ngfactory = __webpack_require__(225);

// EXTERNAL MODULE: ./src/pages/profile/profile.ngfactory.js
var profile_ngfactory = __webpack_require__(221);

// EXTERNAL MODULE: ./src/pages/text-search/text-search.ngfactory.js
var text_search_ngfactory = __webpack_require__(226);

// EXTERNAL MODULE: ./src/pages/image-search/image-search.ngfactory.js
var image_search_ngfactory = __webpack_require__(220);

// EXTERNAL MODULE: ./src/pages/recipe-list/recipe-list.ngfactory.js
var recipe_list_ngfactory = __webpack_require__(224);

// EXTERNAL MODULE: ./src/pages/recipe-detail/recipe-detail.ngfactory.js
var recipe_detail_ngfactory = __webpack_require__(222);

// EXTERNAL MODULE: ./src/pages/login/login.ngfactory.js
var login_ngfactory = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(137);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_app.module,ionic_angular_components_app_app_root,_.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_app.component.ngfactory,_pages_home_home.ngfactory,_pages_recipe_search_recipe_search.ngfactory,_pages_profile_profile.ngfactory,_pages_text_search_text_search.ngfactory,_pages_image_search_image_search.ngfactory,_pages_recipe_list_recipe_list.ngfactory,_pages_recipe_detail_recipe_detail.ngfactory,_pages_login_login.ngfactory,_angular_common,_angular_platform_browser,ionic_angular_gestures_gesture_config,_angular_common_http,_angular_forms,ionic_angular_components_action_sheet_action_sheet_controller,ionic_angular_components_app_app,ionic_angular_config_config,ionic_angular_components_alert_alert_controller,ionic_angular_util_events,ionic_angular_util_form,ionic_angular_tap_click_haptic,ionic_angular_platform_platform,ionic_angular_platform_keyboard,ionic_angular_platform_dom_controller,ionic_angular_components_loading_loading_controller,ionic_angular_module,ionic_angular_navigation_url_serializer,ionic_angular_navigation_deep_linker,ionic_angular_util_module_loader,ionic_angular_components_modal_modal_controller,ionic_angular_components_picker_picker_controller,ionic_angular_components_popover_popover_controller,ionic_angular_tap_click_tap_click,ionic_angular_gestures_gesture_controller,ionic_angular_components_toast_toast_controller,ionic_angular_transitions_transition_controller,_ionic_native_status_bar_index,_ionic_native_splash_screen_index,_ionic_native_camera_index,_ionic_native_facebook_index,_providers_auth_auth,_providers_recipe_search_service_recipe_search_service,_providers_camera_search_camera_search,_ionic_native_text_to_speech_index,_providers_profile_profile,_providers_recipe_recipe,ionic_angular_util_ionic_error_handler,ionic_angular_platform_platform_registry,ionic_angular_components_app_menu_controller,ionic_angular_util_ng_module_loader,ionic_angular_config_mode_registry,_app.component PURE_IMPORTS_END */
































































var AppModuleNgFactory = /*@__PURE__*/ core["W" /* ɵcmf */](AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_10" /* ɵmod */]([core["_11" /* ɵmpd */](512, core["i" /* ComponentFactoryResolver */], core["S" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, HomePageNgFactory, recipe_search_ngfactory["a" /* RecipeSearchPageNgFactory */], profile_ngfactory["a" /* ProfilePageNgFactory */], text_search_ngfactory["a" /* TextSearchPageNgFactory */], image_search_ngfactory["a" /* ImageSearchPageNgFactory */], recipe_list_ngfactory["a" /* RecipeListPageNgFactory */], recipe_detail_ngfactory["a" /* RecipeDetailPageNgFactory */], login_ngfactory["a" /* LoginPageNgFactory */]]], [3, core["i" /* ComponentFactoryResolver */]], core["s" /* NgModuleRef */]]), core["_11" /* ɵmpd */](5120, core["r" /* LOCALE_ID */], core["_9" /* ɵm */], [[3, core["r" /* LOCALE_ID */]]]), core["_11" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["r" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_11" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_0" /* ɵf */], []), core["_11" /* ɵmpd */](5120, core["p" /* IterableDiffers */], core["_6" /* ɵk */], []), core["_11" /* ɵmpd */](5120, core["q" /* KeyValueDiffers */], core["_7" /* ɵl */], []), core["_11" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](6144, core["D" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_11" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_11" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["u" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_11" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["u" /* NgZone */]]), core["_11" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_11" /* ɵmpd */](6144, core["B" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_11" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_11" /* ɵmpd */](4608, core["G" /* Testability */], core["G" /* Testability */], [core["u" /* NgZone */]]), core["_11" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](4608, http["i" /* HttpXsrfTokenExtractor */], http["n" /* ɵg */], [common["c" /* DOCUMENT */], core["w" /* PLATFORM_ID */], http["l" /* ɵe */]]), core["_11" /* ɵmpd */](4608, http["o" /* ɵh */], http["o" /* ɵh */], [http["i" /* HttpXsrfTokenExtractor */], http["m" /* ɵf */]]), core["_11" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["o" /* ɵh */]]), core["_11" /* ɵmpd */](4608, http["k" /* ɵd */], http["k" /* ɵd */], []), core["_11" /* ɵmpd */](6144, http["j" /* XhrFactory */], null, [http["k" /* ɵd */]]), core["_11" /* ɵmpd */](4608, http["h" /* HttpXhrBackend */], http["h" /* HttpXhrBackend */], [http["j" /* XhrFactory */]]), core["_11" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["h" /* HttpXhrBackend */]]), core["_11" /* ɵmpd */](5120, http["f" /* HttpHandler */], http["p" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_11" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["f" /* HttpHandler */]]), core["_11" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_11" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_11" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_11" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_11" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_11" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["u" /* NgZone */], dom_controller["a" /* DomController */]]), core["_11" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](5120, common["f" /* LocationStrategy */], ionic_angular_module["c" /* provideLocationStrategy */], [common["q" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, common["e" /* Location */], common["e" /* Location */], [common["f" /* LocationStrategy */]]), core["_11" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_11" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["e" /* Location */], module_loader["b" /* ModuleLoader */], core["i" /* ComponentFactoryResolver */]]), core["_11" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_11" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_11" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_11" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_11" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_11" /* ɵmpd */](4608, camera["a" /* Camera */], camera["a" /* Camera */], []), core["_11" /* ɵmpd */](4608, facebook["a" /* Facebook */], facebook["a" /* Facebook */], []), core["_11" /* ɵmpd */](4608, auth["a" /* AuthProvider */], auth["a" /* AuthProvider */], [http["c" /* HttpClient */], facebook["a" /* Facebook */]]), core["_11" /* ɵmpd */](4608, recipe_search_service["a" /* RecipeSearchServiceProvider */], recipe_search_service["a" /* RecipeSearchServiceProvider */], [http["c" /* HttpClient */], auth["a" /* AuthProvider */]]), core["_11" /* ɵmpd */](4608, camera_search["a" /* CameraSearchProvider */], camera_search["a" /* CameraSearchProvider */], [http["c" /* HttpClient */]]), core["_11" /* ɵmpd */](4608, text_to_speech["a" /* TextToSpeech */], text_to_speech["a" /* TextToSpeech */], []), core["_11" /* ɵmpd */](4608, profile_profile["a" /* ProfileProvider */], profile_profile["a" /* ProfileProvider */], [http["c" /* HttpClient */], auth["a" /* AuthProvider */]]), core["_11" /* ɵmpd */](4608, recipe["a" /* RecipeProvider */], recipe["a" /* RecipeProvider */], [http["c" /* HttpClient */], auth["a" /* AuthProvider */]]), core["_11" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_11" /* ɵmpd */](512, core["k" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_11" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_11" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_11" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["u" /* NgZone */]]), core["_11" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_11" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_11" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_11" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_11" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_11" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [{ loadChildren: "../pages/image-search/image-search.module.ngfactory#ImageSearchPageModuleNgFactory", name: "ImageSearchPage", segment: "image-search", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory", name: "ProfilePage", segment: "profile", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/recipe-detail/recipe-detail.module.ngfactory#RecipeDetailPageModuleNgFactory", name: "RecipeDetailPage", segment: "recipe-detail", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/login/login.module.ngfactory#LoginPageModuleNgFactory", name: "LoginPage", segment: "login", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/recipe-list/recipe-list.module.ngfactory#RecipeListPageModuleNgFactory", name: "RecipeListPage", segment: "recipe-list", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/recipe-search/recipe-search.module.ngfactory#RecipeSearchPageModuleNgFactory", name: "RecipeSearchPage", segment: "recipe-search", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/text-search/text-search.module.ngfactory#TextSearchPageModuleNgFactory", name: "TextSearchPage", segment: "text-search", priority: "low", defaultHistory: [] }] }, []), core["_11" /* ɵmpd */](512, core["h" /* Compiler */], core["h" /* Compiler */], []), core["_11" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["h" /* Compiler */]]), core["_11" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["o" /* Injector */]]), core["_11" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["t" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["u" /* NgZone */]]), core["_11" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_11" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["u" /* NgZone */], core["T" /* ɵConsole */], core["o" /* Injector */], core["k" /* ErrorHandler */], core["i" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_11" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_11" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_11" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_11" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_11" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_11" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_11" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_11" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_11" /* ɵmpd */](512, AppModule, AppModule, []), core["_11" /* ɵmpd */](256, http["l" /* ɵe */], "XSRF-TOKEN", []), core["_11" /* ɵmpd */](256, http["m" /* ɵf */], "X-XSRF-TOKEN", []), core["_11" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_11" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });





// CONCATENATED MODULE: ./src/app/main.ts



Object(core["M" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = /*@__PURE__*/__webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(152);





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /*@__PURE__*/ (function () {
    function AuthProvider(http, fb) {
        this.http = http;
        this.fb = fb;
        this.amLoggedIn = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* EventEmitter */]();
        this.token = "";
    }
    AuthProvider.prototype.isLoggedIn = function () {
        return this.fb.getLoginStatus();
    };
    AuthProvider.prototype.login = function () {
        return this.fb.login(['public_profile', 'user_friends', 'email']);
    };
    AuthProvider.prototype.logout = function () {
        return this.fb.logout();
    };
    AuthProvider.prototype.getUserDetail = function (userID) {
        var _this = this;
        this.userID = userID;
        console.log("USER ID: ");
        console.log(userID);
        this.fb.api("/" + userID + "/?fields=id,email,name,picture,gender", ["public_profile"]).then(function (data) {
            _this.userData = data;
            console.log("USER DATA:");
            console.log(_this.userData);
        }).catch(function (error) {
            console.log("ERROR WHILE GETTING USER DATA:");
            console.log(error);
        });
    };
    AuthProvider.prototype.fireEvent = function (event) {
        this.amLoggedIn.emit(event);
    };
    AuthProvider.prototype.getEmitter = function () {
        return this.amLoggedIn;
    };
    AuthProvider.prototype.setToken = function (token) {
        this.token = token;
        console.log("TOKEN SET!");
    };
    AuthProvider.prototype.getUserData = function () {
        return this.userData;
    };
    AuthProvider.prototype.getUserID = function () {
        return this.userID;
    };
    return AuthProvider;
}());






/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeSearchServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = /*@__PURE__*/__webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(29);





/*
  Generated class for the RecipeSearchServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecipeSearchServiceProvider = /*@__PURE__*/ (function () {
    function RecipeSearchServiceProvider(http, authProvider) {
        this.http = http;
        this.authProvider = authProvider;
        this.searchParams = {
            "query": "",
            "ingredients": [],
            "profile": {}
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpHeaders */]({ "X-Mashape-Key": "IYtTEskRRumshZ8jbAFbQGfEcTe3p1nQ65ljsnWJMcOcldnfRv" });
        this.contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpHeaders */]({ "Content-Type": "application/json" });
        console.log(this.searchParams);
    }
    RecipeSearchServiceProvider.prototype.setQuery = function (queryString) {
        this.searchParams["query"] = queryString;
    };
    RecipeSearchServiceProvider.prototype.clearQuery = function () {
        this.searchParams["query"] = "";
    };
    RecipeSearchServiceProvider.prototype.setIngredients = function (ingredients) {
        this.searchParams["ingredients"] = ingredients;
    };
    RecipeSearchServiceProvider.prototype.clearIngredients = function () {
        this.searchParams["ingredients"] = [];
    };
    RecipeSearchServiceProvider.prototype.setProfile = function (profile) {
        this.searchParams["profile"] = profile;
    };
    RecipeSearchServiceProvider.prototype.makeQuery = function () {
        var _this = this;
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
        var requestURL = "https://vischef.com/api/recipes";
        var usedIngredients = this.searchParams["ingredients"].filter(function (d) { return d != _this.searchParams["query"]; });
        var ingredientList = usedIngredients[0];
        for (var i = 1; i < usedIngredients.length; i++) {
            ingredientList += ("," + usedIngredients[i]);
        }
        var requestBody = {
            "key": "a1154b7c0f771ceb3a1e6a9e1130e692d06b9e2a7589e657a098085a3e3bf13d",
            "query": this.searchParams["query"],
            "ingredients": ingredientList,
            "userId": this.authProvider.getUserID()
        };
        return this.http.post(requestURL, requestBody, { headers: this.contentHeaders });
    };
    RecipeSearchServiceProvider.prototype.getRecipeInfo = function (id) {
        var requestURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information?includeNutrition=true";
        return this.http.get(requestURL, { headers: this.headers });
    };
    return RecipeSearchServiceProvider;
}());






/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = /*@__PURE__*/__webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(29);





/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecipeProvider = /*@__PURE__*/ (function () {
    function RecipeProvider(http, authProvider) {
        this.http = http;
        this.authProvider = authProvider;
        this.recipes = [];
        this.contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpHeaders */]({ "Content-Type": "application/json" });
        console.log('Hello RecipeProvider Provider');
    }
    RecipeProvider.prototype.getRecipes = function () {
        var requestURL = "https://vischef.com/users/" + this.authProvider.getUserID() + "/recipes";
        return this.http.get(requestURL);
    };
    RecipeProvider.prototype.addRecipe = function (recipe) {
        var requestURL = "https://vischef.com/users/" + this.authProvider.getUserID() + "/recipes";
        return this.http.post(requestURL, recipe, { headers: this.contentHeaders });
    };
    return RecipeProvider;
}());






/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipe_search_service_recipe_search_service__ = /*@__PURE__*/__webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_detail_recipe_detail__ = __webpack_require__(113);







var RecipeListPage = /*@__PURE__*/ (function () {
    function RecipeListPage(navCtrl, navParams, recipeSearchService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeSearchService = recipeSearchService;
        this.modalCtrl = modalCtrl;
        this.recipeSearchService.makeQuery().subscribe(function (data) {
            console.log("Request worked");
            console.log(data);
            _this.recipes = data;
        });
    }
    RecipeListPage.prototype.ionViewDidLoad = function () {
    };
    RecipeListPage.prototype.selectRecipe = function (recipe) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], recipe);
        modal.present();
    };
    return RecipeListPage;
}());






/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraSearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = /*@__PURE__*/__webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = /*@__PURE__*/__webpack_require__(0);




/*
  Generated class for the CameraSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraSearchProvider = /*@__PURE__*/ (function () {
    function CameraSearchProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpHeaders */]({ "Content-Type": "application/json" });
    }
    CameraSearchProvider.prototype.identifyIngredients = function (imageData) {
        var requestBody = {
            "key": "a1154b7c0f771ceb3a1e6a9e1130e692d06b9e2a7589e657a098085a3e3bf13d",
            "base64": imageData
        };
        var requestURL = "https://vischef.com/api/predictions";
        return this.http.post(requestURL, requestBody, { headers: this.headers });
    };
    return CameraSearchProvider;
}());






/***/ })

},[227]);
//# sourceMappingURL=main.js.map