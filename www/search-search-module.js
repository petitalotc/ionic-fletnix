(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "3ezG":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"md\">\n    <ion-title mode=\"ios\">Rechercher</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchItem()\" debounce=\"500\" placeholder=\"Titre d'un film/série\" animated></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <app-item-vertical-list [title]=\"listTitle\" [items]=\"items\"></app-item-vertical-list>\n\n</ion-content>\n");

/***/ }),

/***/ "Bqob":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.page.html */ "3ezG");
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss */ "kA6u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tmdb/models/EBackdropSizes */ "KoVS");
/* harmony import */ var _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tmdb/models/EPosterSizes */ "WZE1");
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tmdb/tmdb.service */ "oN/V");








let SearchPage = class SearchPage {
    constructor(isvcTMDB) {
        this.isvcTMDB = isvcTMDB;
        this.searchTerm = "";
    }
    ngOnInit() {
        this.isvcTMDB.getBestTrending()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
            poResponse.results.forEach((poMovie) => {
                this.isvcTMDB.addImagePathToItem(poMovie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"]['780px'], _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
            });
            this.defaultItems = poResponse.results;
            this.items = poResponse.results;
            this.listTitle = "Les plus recherchés";
        })).subscribe();
    }
    searchItem() {
        if (this.searchTerm === "") {
            this.listTitle = "Les plus recherchés";
            this.items = this.defaultItems;
        }
        else {
            this.listTitle = "Résultats";
            this.isvcTMDB.search(this.searchTerm)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poResponse) => {
                poResponse.results.forEach((poMovie) => {
                    this.isvcTMDB.addImagePathToItem(poMovie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_5__["EBackdropSizes"]['780px'], _services_tmdb_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_6__["EPosterSizes"]['185px']);
                });
                this.items = poResponse.results;
            })).subscribe();
        }
        ;
    }
};
SearchPage.ctorParameters = () => [
    { type: _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_7__["TMDBService"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchPage);



/***/ }),

/***/ "RmqX":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "pAzW");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "Bqob");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");









let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "kA6u":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "pAzW":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "Bqob");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    },
    {
        path: 'movie/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | item-detail-item-detail-module */ "common").then(__webpack_require__.bind(null, /*! ../item-detail/item-detail.module */ "uBvM")).then(m => m.ItemDetailModule)
    },
    {
        path: 'tv/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | item-detail-item-detail-module */ "common").then(__webpack_require__.bind(null, /*! ../item-detail/item-detail.module */ "uBvM")).then(m => m.ItemDetailModule)
    },
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map