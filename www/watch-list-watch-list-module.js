(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["watch-list-watch-list-module"],{

/***/ "2ZLR":
/*!*********************************************************!*\
  !*** ./src/app/watch-list/watch-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WatchListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListPageRoutingModule", function() { return WatchListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _watch_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch-list.page */ "688J");




const routes = [
    {
        path: '',
        component: _watch_list_page__WEBPACK_IMPORTED_MODULE_3__["WatchListPage"]
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
let WatchListPageRoutingModule = class WatchListPageRoutingModule {
};
WatchListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WatchListPageRoutingModule);



/***/ }),

/***/ "688J":
/*!***********************************************!*\
  !*** ./src/app/watch-list/watch-list.page.ts ***!
  \***********************************************/
/*! exports provided: WatchListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListPage", function() { return WatchListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_watch_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./watch-list.page.html */ "ZP7z");
/* harmony import */ var _watch_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch-list.page.scss */ "NUMj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data/data.service */ "1y+R");






let WatchListPage = class WatchListPage {
    constructor(isvcData) {
        this.isvcData = isvcData;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isvcData.userData.$watch_list.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poUserData) => this.items = poUserData)).subscribe();
        });
    }
};
WatchListPage.ctorParameters = () => [
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
WatchListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-watch-list',
        template: _raw_loader_watch_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_watch_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WatchListPage);



/***/ }),

/***/ "NUMj":
/*!*************************************************!*\
  !*** ./src/app/watch-list/watch-list.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXRjaC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "UWY7":
/*!*************************************************!*\
  !*** ./src/app/watch-list/watch-list.module.ts ***!
  \*************************************************/
/*! exports provided: WatchListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListPageModule", function() { return WatchListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _watch_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watch-list-routing.module */ "2ZLR");
/* harmony import */ var _watch_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch-list.page */ "688J");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








let WatchListPageModule = class WatchListPageModule {
};
WatchListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _watch_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["WatchListPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_watch_list_page__WEBPACK_IMPORTED_MODULE_6__["WatchListPage"]]
    })
], WatchListPageModule);



/***/ }),

/***/ "ZP7z":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/watch-list/watch-list.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"md\">\n    <ion-title mode=\"ios\">À voir</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-item-vertical-list *ngIf=\"items?.length > 0; else noResult\" [items]=\"items\"></app-item-vertical-list>\n</ion-content>\n\n<ng-template #noResult>\n  <app-no-result [checkUser]=\"true\"></app-no-result>\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=watch-list-watch-list-module.js.map