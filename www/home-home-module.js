(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'movie/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../item-detail/item-detail.module */ "uBvM")).then(m => m.ItemDetailModule)
    },
    {
        path: 'tv/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../item-detail/item-detail.module */ "uBvM")).then(m => m.ItemDetailModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"md\">\n    <ion-title>\n      <ion-img src=\"assets/icon/title.png\"></ion-img>\n    </ion-title>\n    <ion-buttons class=\"right-btns\" mode=\"ios\" slot=\"end\">\n      <ion-button color=\"dark\" (click)=\"goToProfil()\">\n        <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-spotlight [showInfos]=\"true\" [item]=\"spotlightItem\"></app-spotlight>\n\n  <div class=\"ion-padding\">\n    <app-item-horizontal-list title=\"Films les plus populaires\" [items]=\"popularMovies\"></app-item-horizontal-list>\n    <app-item-horizontal-list title=\"Séries les plus populaires\" [items]=\"popularSeries\"></app-item-horizontal-list>\n    <app-item-horizontal-list title=\"Films en tendance cette semaine\" [items]=\"trendingMovies\"></app-item-horizontal-list>\n    <app-item-horizontal-list title=\"Séries en tendance cette semaine\" [items]=\"trendingSeries\"></app-item-horizontal-list>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _item_detail_item_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../item-detail/item-detail.module */ "uBvM");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _services_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/network/network.service */ "7AKq");










let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _item_detail_item_detail_module__WEBPACK_IMPORTED_MODULE_7__["ItemDetailModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        providers: [_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-img {\n  max-width: 90px;\n  margin: auto;\n}\nion-header .right-btns {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBRFIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24taW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLnJpZ2h0LWJ0bnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tmdb/models/EBackdropSizes */ "KoVS");
/* harmony import */ var _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tmdb/models/EPosterSizes */ "WZE1");
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tmdb/tmdb.service */ "oN/V");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let HomePage = class HomePage {
    constructor(isvcTMDB, isvcAuth, ioRouter) {
        this.isvcTMDB = isvcTMDB;
        this.isvcAuth = isvcAuth;
        this.ioRouter = ioRouter;
    }
    ngOnInit() {
        this.isvcTMDB.getMovies({ sort_by: "popularity.desc", page: 1 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
            poResponse.results.forEach((poMovie) => {
                this.isvcTMDB.addImagePathToItem(poMovie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"]['1280px'], _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
            });
            this.popularMovies = poResponse.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.isvcTMDB.getSeries({ sort_by: "popularity.desc", page: 1 })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
            poResponse.results.forEach((poSerie) => {
                this.isvcTMDB.addImagePathToItem(poSerie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"]['1280px'], _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
            });
            this.popularSeries = poResponse.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.isvcTMDB.getTrendingMovies({ page: 1 })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
            poResponse.results.forEach((poMovie) => {
                this.isvcTMDB.addImagePathToItem(poMovie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"]['1280px'], _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
            });
            this.trendingMovies = poResponse.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.isvcTMDB.getTrendingSeries({ page: 1 })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
            poResponse.results.forEach((poSerie) => {
                this.isvcTMDB.addImagePathToItem(poSerie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"]['1280px'], _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
            });
            this.trendingSeries = poResponse.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.isvcTMDB.getBestTrending({ page: 1 })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
            poResponse.results.forEach((poItem) => {
                this.isvcTMDB.addImagePathToItem(poItem, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"].original, _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
            });
            const randomInt = Math.floor(Math.random() * 20);
            this.spotlightItem = poResponse.results[randomInt];
        })).subscribe();
    }
    goToProfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isvcAuth.user
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poUser) => {
                if (poUser)
                    this.ioRouter.navigateByUrl("/profil");
                else
                    this.isvcAuth.showAuthModal();
            })).subscribe();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_7__["TMDBService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map