(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil-profil-module"],{

/***/ "Dye6":
/*!***************************************!*\
  !*** ./src/app/profil/profil.page.ts ***!
  \***************************************/
/*! exports provided: ProfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPage", function() { return ProfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profil.page.html */ "MX7z");
/* harmony import */ var _profil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.page.scss */ "pTD5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/network.service */ "7AKq");







let ProfilPage = class ProfilPage {
    constructor(isvcAuth, isvcNetwork) {
        this.isvcAuth = isvcAuth;
        this.isvcNetwork = isvcNetwork;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isvcAuth.user
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((poUser) => this.user = poUser)).subscribe();
            this.isvcNetwork.networkStatus$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((poConnectionStatus) => this.isNetworkConnected = poConnectionStatus === null || poConnectionStatus === void 0 ? void 0 : poConnectionStatus.connected)).subscribe();
        });
    }
    signOut() {
        this.isvcAuth.signOut();
    }
};
ProfilPage.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] }
];
ProfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profil',
        template: _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilPage);



/***/ }),

/***/ "MX7z":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title mode=\"ios\">Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"user\" class=\"ion-padding\">\n    <h1>{{ user.displayName }}</h1>\n    <p>{{ user.email }}</p>\n    <p>État de la connexion : {{ isNetworkConnected ? \"Connecté\" : \"Déconnecté\" }}</p>\n\n    <ion-button mode=\"ios\" (click)=\"signOut()\" expand=\"block\" fill=\"clear\" color=\"danger\">\n      Se déconnecter\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "XBj5":
/*!*****************************************!*\
  !*** ./src/app/profil/profil.module.ts ***!
  \*****************************************/
/*! exports provided: ProfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil-routing.module */ "v4sS");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profil.page */ "Dye6");







let ProfilPageModule = class ProfilPageModule {
};
ProfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilPageRoutingModule"]
        ],
        declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_6__["ProfilPage"]]
    })
], ProfilPageModule);



/***/ }),

/***/ "pTD5":
/*!*****************************************!*\
  !*** ./src/app/profil/profil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */");

/***/ }),

/***/ "v4sS":
/*!*************************************************!*\
  !*** ./src/app/profil/profil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageRoutingModule", function() { return ProfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profil.page */ "Dye6");




const routes = [
    {
        path: '',
        component: _profil_page__WEBPACK_IMPORTED_MODULE_3__["ProfilPage"]
    }
];
let ProfilPageRoutingModule = class ProfilPageRoutingModule {
};
ProfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=profil-profil-module.js.map