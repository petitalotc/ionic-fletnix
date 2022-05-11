(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~favorites-favorites-module~home-home-module~search-search-module~watch-list-watch-list-module"],{

/***/ "+IVh":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spotlight/spotlight.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"isModal ? 'header' : 'spotlight'\" *ngIf=\"item\" [style]=\"'background-image: url(' + item.backdrop_path + ');'\">\n  <div class=\"gradient\">\n    <div class=\"detail\">\n      <h1>{{ item.title ? item.title : item.name }}</h1>\n      <div class=\"action-buttons\">\n        <div class=\"btn\">\n          <ion-button fill=\"clear\" shape=\"round\" size=\"small\" color=\"dark\" (click)=\"toggleAddToWatchList(item)\">\n            <ion-icon slot=\"icon-only\" [name]=\"isInWatchList(item) ? 'checkmark-outline' : 'add'\"></ion-icon>\n          </ion-button>\n          <span>À voir</span>\n        </div>\n        <div *ngIf=\"showInfos; else shareBtn\" class=\"btn\">\n          <ion-button fill=\"clear\" shape=\"round\" size=\"small\" color=\"dark\" (click)=\"goToDetail()\">\n            <ion-icon slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n          </ion-button>\n          <span>Infos</span>\n        </div>\n        <ng-template #shareBtn>\n          <div class=\"btn\">\n            <ion-button fill=\"clear\" shape=\"round\" size=\"small\" color=\"dark\" (click)=\"share(item)\">\n              <ion-icon slot=\"icon-only\" name=\"share-outline\"></ion-icon>\n            </ion-button>\n            <span>Partager</span>\n          </div>\n        </ng-template>\n        <div class=\"btn\">\n          <ion-button fill=\"clear\" shape=\"round\" size=\"small\" color=\"dark\" (click)=\"toggleAddToFavorites(item)\">\n            <ion-icon slot=\"icon-only\" [name]=\"isFavorite(item) ? 'star' : 'star-outline'\"></ion-icon>\n          </ion-button>\n          <span>Favoris</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "0NL9":
/*!*********************************************************************************!*\
  !*** ./src/app/components/close-modal-button/close-modal-button.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-btn {\n  position: absolute;\n  margin-top: var(--ion-safe-area-top, 0);\n  right: 0;\n  top: 10px;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nsb3NlLW1vZGFsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJjbG9zZS1tb2RhbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTBweDtcbiAgICB6LWluZGV4OiA5OTtcbn0iXX0= */");

/***/ }),

/***/ "0Q1m":
/*!*****************************************************!*\
  !*** ./src/app/services/haptics/haptics.service.ts ***!
  \*****************************************************/
/*! exports provided: HapticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsService", function() { return HapticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/haptics */ "SglF");



let HapticsService = class HapticsService {
    constructor() { }
    hapticsVibrate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["Haptics"].vibrate();
        });
    }
    ;
    hapticsImpactMedium() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["Haptics"].impact({ style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["ImpactStyle"].Medium });
        });
    }
    ;
    hapticsImpactLight() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["Haptics"].impact({ style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["ImpactStyle"].Light });
        });
    }
    ;
    hapticsSelectionStart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["Haptics"].selectionStart();
        });
    }
    ;
    hapticsSelectionChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["Haptics"].selectionChanged();
        });
    }
    ;
    hapticsSelectionEnd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__["Haptics"].selectionEnd();
        });
    }
    ;
};
HapticsService.ctorParameters = () => [];
HapticsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HapticsService);



/***/ }),

/***/ "1V/n":
/*!********************************************************************************!*\
  !*** ./src/app/item-detail/item-preview-modal/item-preview-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemPreviewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPreviewModalComponent", function() { return ItemPreviewModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_preview_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-preview-modal.component.html */ "neG6");
/* harmony import */ var _item_preview_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-preview-modal.component.scss */ "6j1N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tmdb/tmdb.service */ "oN/V");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tmdb/models/EBackdropSizes */ "KoVS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ItemPreviewModalComponent = class ItemPreviewModalComponent {
    constructor(ioModalCtrl, isvcTMDB) {
        this.ioModalCtrl = ioModalCtrl;
        this.isvcTMDB = isvcTMDB;
    }
    ngOnInit() {
        this.isvcTMDB.getItemDetail(this.item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((poItemDetail) => {
            this.isvcTMDB.addImagePathToItem(poItemDetail, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_6__["EBackdropSizes"]['1280px']);
            this.itemDetail = poItemDetail;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((poItemDetail) => this.isvcTMDB.getWatchProviders(poItemDetail)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((poProvidersResponse) => {
            var _a, _b, _c, _d;
            (_b = (_a = poProvidersResponse.results.FR) === null || _a === void 0 ? void 0 : _a.flatrate) === null || _b === void 0 ? void 0 : _b.forEach((poProvider) => this.isvcTMDB.addImagePathToItem(poProvider));
            if ((_c = poProvidersResponse.results.FR) === null || _c === void 0 ? void 0 : _c.flatrate)
                this.itemDetail.providers = (_d = poProvidersResponse.results.FR) === null || _d === void 0 ? void 0 : _d.flatrate;
        })).subscribe();
    }
    closeModal() {
        this.ioModalCtrl.dismiss();
    }
};
ItemPreviewModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TMDBService"] }
];
ItemPreviewModalComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemPreviewModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-preview-detail-modal',
        template: _raw_loader_item_preview_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_preview_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemPreviewModalComponent);



/***/ }),

/***/ "3cUv":
/*!***********************************************************************!*\
  !*** ./src/app/components/youtube-iframe/youtube-iframe.component.ts ***!
  \***********************************************************************/
/*! exports provided: YoutubeIframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeIframeComponent", function() { return YoutubeIframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_youtube_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./youtube-iframe.component.html */ "eSsf");
/* harmony import */ var _youtube_iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube-iframe.component.scss */ "kCmQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let YoutubeIframeComponent = class YoutubeIframeComponent {
    constructor(ioDomSanitizer) {
        this.ioDomSanitizer = ioDomSanitizer;
    }
    set videoId(psVideoId) {
        this.trustedSource = this.ioDomSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + psVideoId);
    }
    ;
    ngOnInit() { }
};
YoutubeIframeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
YoutubeIframeComponent.propDecorators = {
    videoId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
YoutubeIframeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-youtube-iframe',
        template: _raw_loader_youtube_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_youtube_iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], YoutubeIframeComponent);



/***/ }),

/***/ "4C5V":
/*!*****************************************************************!*\
  !*** ./src/app/components/back-button/back-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_back_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./back-button.component.html */ "7Q6a");
/* harmony import */ var _back_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-button.component.scss */ "t4ZT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let BackButtonComponent = class BackButtonComponent {
    constructor(ioNavCtrl) {
        this.ioNavCtrl = ioNavCtrl;
    }
    ngOnInit() { }
    goBack() {
        this.ioNavCtrl.back();
    }
};
BackButtonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
BackButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-back-button',
        template: _raw_loader_back_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_back_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BackButtonComponent);



/***/ }),

/***/ "4l1R":
/*!************************************************!*\
  !*** ./src/app/services/tmdb/tmdbApiClient.ts ***!
  \************************************************/
/*! exports provided: TMDBApiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMDBApiClient", function() { return TMDBApiClient; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");

class TMDBApiClient {
    constructor(moHttpClient) {
        this.moHttpClient = moHttpClient;
        // Doc : https://developers.themoviedb.org/3/getting-started/introduction
        this.C_TMDB_API_PATH = "https://api.themoviedb.org/3";
    }
    getMovie(pnMovieId) {
        let lsUrl = this.getMoviePath(pnMovieId);
        return this.moHttpClient.get(lsUrl);
    }
    getSerie(pnSerieId) {
        let lsUrl = this.getSeriePath(pnSerieId);
        return this.moHttpClient.get(lsUrl);
    }
    getMovies(poParameters) {
        let lsUrl = this.buildPath("/discover/movie", poParameters);
        return this.moHttpClient.get(lsUrl);
    }
    getSeries(poParameters) {
        let lsUrl = this.buildPath("/discover/tv", poParameters);
        return this.moHttpClient.get(lsUrl);
    }
    getTrendingMovies(poParameters) {
        let lsUrl = this.buildPath("/trending/movie/week", poParameters);
        return this.moHttpClient.get(lsUrl);
    }
    getTrendingSeries(poParameters) {
        let lsUrl = this.buildPath("/trending/tv/week", poParameters);
        return this.moHttpClient.get(lsUrl);
    }
    getBestTrending(poParameters) {
        let lsUrl = this.buildPath("/trending/all/day", poParameters);
        return this.moHttpClient.get(lsUrl);
    }
    getMovieProviders(pnItemId) {
        let lsUrl = `${this.getMoviePath(pnItemId, "/watch/providers")}`;
        return this.moHttpClient.get(lsUrl);
    }
    getSerieProviders(pnItemId) {
        let lsUrl = `${this.getSeriePath(pnItemId, "/watch/providers")}`;
        return this.moHttpClient.get(lsUrl);
    }
    getMovieYoutubeVideos(pnItemId) {
        let lsUrl = `${this.getMoviePath(pnItemId, "/videos")}`;
        return this.moHttpClient.get(lsUrl);
    }
    getSerieYoutubeVideos(pnItemId) {
        let lsUrl = `${this.getSeriePath(pnItemId, "/videos")}`;
        return this.moHttpClient.get(lsUrl);
    }
    search(psQuery) {
        let lsUrl = this.buildPath("/search/multi", { query: psQuery });
        return this.moHttpClient.get(lsUrl);
    }
    getMoviePath(pnMovieId, psLinkExtra) {
        return this.buildPath(`/movie/${pnMovieId}${psLinkExtra ? psLinkExtra : ''}`);
    }
    getSeriePath(pnSerieId, psLinkExtra) {
        return this.buildPath(`/tv/${pnSerieId}${psLinkExtra ? psLinkExtra : ''}`);
    }
    buildPath(psUrl, poParameters) {
        let lsUrl = `${this.C_TMDB_API_PATH}${this.addDefaultParams(psUrl)}`;
        if (poParameters) {
            for (const [key, value] of Object.entries(poParameters)) {
                lsUrl = this.addRequestParam(lsUrl, key, value);
            }
            ;
        }
        ;
        return lsUrl;
    }
    addDefaultParams(psUrl) {
        return psUrl + `?api_key=${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].TMDB_API_KEY}&language=fr-FR&watch_region=FR`;
    }
    addRequestParam(psUrl, psParamName, poParamValue) {
        if (poParamValue !== undefined && poParamValue !== null)
            psUrl = `${psUrl}${psUrl.includes("?") ? "&" : "?"}${psParamName}=${poParamValue}`;
        return psUrl;
    }
}


/***/ }),

/***/ "6j1N":
/*!**********************************************************************************!*\
  !*** ./src/app/item-detail/item-preview-modal/item-preview-modal.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXByZXZpZXctbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "7GKH":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-result/no-result.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <ng-container *ngIf=\"needUser then needUser else noResult\"></ng-container>\n</div>\n\n<ng-template #needUser>\n  <ng-container *ngIf=\"!isUserlogged; else noResult;\">\n    <h1>Veuillez vous connecter</h1>\n    <ion-button mode=\"ios\" (click)=\"isvcAuth.showAuthModal()\" expand=\"block\" fill=\"clear\" color=\"danger\">\n      Se connecter\n    </ion-button>\n  </ng-container>\n</ng-template>\n\n<ng-template #noResult>\n  <h1>Pas de résultat</h1>\n</ng-template>");

/***/ }),

/***/ "7Q6a":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/back-button/back-button.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\">\n  <ion-fab-button size=\"small\" (click)=\"goBack()\" color=\"dark\">\n    <ion-icon name=\"chevron-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "9rzz":
/*!*************************************************************************************!*\
  !*** ./src/app/components/item-horizontal-list/item-horizontal-list.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-top: 0;\n}\n\nion-slides {\n  margin-bottom: 20px;\n}\n\nimg {\n  border-radius: 5px;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0taG9yaXpvbnRhbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0taG9yaXpvbnRhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "H+Hz":
/*!*************************************************************!*\
  !*** ./src/app/components/spotlight/spotlight.component.ts ***!
  \*************************************************************/
/*! exports provided: SpotlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotlightComponent", function() { return SpotlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spotlight_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spotlight.component.html */ "+IVh");
/* harmony import */ var _spotlight_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotlight.component.scss */ "Xjk8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tmdb/tmdb.service */ "oN/V");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/auth.service */ "qXBG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/share */ "rJ4/");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _services_haptics_haptics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/haptics/haptics.service */ "0Q1m");













let SpotlightComponent = class SpotlightComponent {
    constructor(isvcTMDB, isvcData, isvcAuth, isvcHaptics, ioRouter, ioModalCtrl) {
        this.isvcTMDB = isvcTMDB;
        this.isvcData = isvcData;
        this.isvcAuth = isvcAuth;
        this.isvcHaptics = isvcHaptics;
        this.ioRouter = ioRouter;
        this.ioModalCtrl = ioModalCtrl;
    }
    ngOnInit() { }
    goToDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isvcHaptics.hapticsImpactMedium();
            if (this.isModal)
                yield this.ioModalCtrl.dismiss();
            if (this.isvcTMDB.getMediaType(this.item) === "movie")
                this.ioRouter.navigate([this.ioRouter.url, 'movie', this.item.id]);
            else
                this.ioRouter.navigate([this.ioRouter.url, 'tv', this.item.id]);
        });
    }
    toggleAddToFavorites(poItem) {
        this.isvcHaptics.hapticsImpactMedium();
        this.isvcAuth.user
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((poUser) => {
            if (poUser)
                this.isvcData.toggleAddItemToFavorites(poUser.uid, poItem);
            else {
                this.isvcAuth.showAuthModal();
            }
        })).subscribe();
    }
    toggleAddToWatchList(poItem) {
        this.isvcHaptics.hapticsImpactMedium();
        this.isvcAuth.user
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((poUser) => {
            if (poUser)
                this.isvcData.toggleAddToWatchList(poUser.uid, poItem);
            else {
                this.isvcAuth.showAuthModal();
            }
        })).subscribe();
    }
    isFavorite(poItem) {
        return this.isvcData.isFavorite(poItem);
    }
    isInWatchList(poItem) {
        return this.isvcData.isInWatchList(poItem);
    }
    share(poItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isvcHaptics.hapticsImpactMedium();
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_10__["Share"].share({
                title: poItem.title ? poItem.title : poItem.name,
                text: poItem.title ? poItem.title : poItem.name,
                url: `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].pwaUrl}home/${this.isvcTMDB.getMediaType(poItem)}/${poItem.id}`,
                dialogTitle: '',
            });
        });
    }
};
SpotlightComponent.ctorParameters = () => [
    { type: _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_6__["TMDBService"] },
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_haptics_haptics_service__WEBPACK_IMPORTED_MODULE_12__["HapticsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
SpotlightComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showInfos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SpotlightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-spotlight',
        template: _raw_loader_spotlight_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spotlight_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SpotlightComponent);



/***/ }),

/***/ "Iqe0":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/definitions.js ***!
  \*****************************************************************/
/*! exports provided: ImpactStyle, NotificationType, HapticsNotificationType, HapticsImpactStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactStyle", function() { return ImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return HapticsNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
var ImpactStyle;
(function (ImpactStyle) {
    /**
     * A collision between small, light user interface elements
     *
     * @since 1.0.0
     */
    ImpactStyle["Heavy"] = "HEAVY";
    /**
     * A collision between moderately sized user interface elements
     *
     * @since 1.0.0
     */
    ImpactStyle["Medium"] = "MEDIUM";
    /**
     * A collision between small, light user interface elements
     *
     * @since 1.0.0
     */
    ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function (NotificationType) {
    /**
     * A notification feedback type indicating that a task has completed successfully
     *
     * @since 1.0.0
     */
    NotificationType["Success"] = "SUCCESS";
    /**
     * A notification feedback type indicating that a task has produced a warning
     *
     * @since 1.0.0
     */
    NotificationType["Warning"] = "WARNING";
    /**
     * A notification feedback type indicating that a task has failed
     *
     * @since 1.0.0
     */
    NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
/**
 * @deprecated Use `NotificationType`.
 * @since 1.0.0
 */
const HapticsNotificationType = NotificationType;
/**
 * @deprecated Use `ImpactStyle`.
 * @since 1.0.0
 */
const HapticsImpactStyle = ImpactStyle;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "J0Ef":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/close-modal-button/close-modal-button.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab-button class=\"close-btn\" size=\"small\" (click)=\"close()\" color=\"dark\">\n  <ion-icon name=\"close\"></ion-icon>\n</ion-fab-button>");

/***/ }),

/***/ "KoVS":
/*!********************************************************!*\
  !*** ./src/app/services/tmdb/models/EBackdropSizes.ts ***!
  \********************************************************/
/*! exports provided: EBackdropSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBackdropSizes", function() { return EBackdropSizes; });
var EBackdropSizes;
(function (EBackdropSizes) {
    EBackdropSizes["300px"] = "w300";
    EBackdropSizes["780px"] = "w780";
    EBackdropSizes["1280px"] = "w1280";
    EBackdropSizes["original"] = "original";
})(EBackdropSizes || (EBackdropSizes = {}));


/***/ }),

/***/ "NPC+":
/*!*******************************************************************************!*\
  !*** ./src/app/components/close-modal-button/close-modal-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CloseModalButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseModalButtonComponent", function() { return CloseModalButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_close_modal_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./close-modal-button.component.html */ "J0Ef");
/* harmony import */ var _close_modal_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./close-modal-button.component.scss */ "0NL9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CloseModalButtonComponent = class CloseModalButtonComponent {
    constructor(ioModalCtrl) {
        this.ioModalCtrl = ioModalCtrl;
    }
    ngOnInit() { }
    close() {
        this.ioModalCtrl.dismiss();
    }
};
CloseModalButtonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CloseModalButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-close-modal-button',
        template: _raw_loader_close_modal_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_close_modal_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CloseModalButtonComponent);



/***/ }),

/***/ "QBbb":
/*!***************************************************************!*\
  !*** ./src/app/components/no-result/no-result.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoibm8tcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "SglF":
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: ImpactStyle, NotificationType, HapticsNotificationType, HapticsImpactStyle, Haptics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Haptics", function() { return Haptics; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "Iqe0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImpactStyle", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["ImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["HapticsNotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["HapticsImpactStyle"]; });


const Haptics = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Haptics', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "isrx")).then(m => new m.HapticsWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "T0Ky":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "V++x":
/*!*************************************************************!*\
  !*** ./src/app/components/no-result/no-result.component.ts ***!
  \*************************************************************/
/*! exports provided: NoResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultComponent", function() { return NoResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_no_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./no-result.component.html */ "7GKH");
/* harmony import */ var _no_result_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-result.component.scss */ "QBbb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "qXBG");






let NoResultComponent = class NoResultComponent {
    constructor(isvcAuth) {
        this.isvcAuth = isvcAuth;
        this.isUserlogged = false;
    }
    set checkUser(pbCheckUser) {
        if (pbCheckUser)
            this.needUser = true;
    }
    ;
    ngOnInit() {
        this.isvcAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((poUser) => this.isUserlogged = poUser ? true : false)).subscribe();
    }
};
NoResultComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
NoResultComponent.propDecorators = {
    checkUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NoResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-no-result',
        template: _raw_loader_no_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_no_result_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoResultComponent);



/***/ }),

/***/ "WZE1":
/*!******************************************************!*\
  !*** ./src/app/services/tmdb/models/EPosterSizes.ts ***!
  \******************************************************/
/*! exports provided: EPosterSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPosterSizes", function() { return EPosterSizes; });
var EPosterSizes;
(function (EPosterSizes) {
    EPosterSizes["92px"] = "w92";
    EPosterSizes["154px"] = "w154";
    EPosterSizes["185px"] = "w185";
    EPosterSizes["342px"] = "w342";
    EPosterSizes["500px"] = "w500";
    EPosterSizes["780px"] = "w780";
    EPosterSizes["original"] = "original";
})(EPosterSizes || (EPosterSizes = {}));


/***/ }),

/***/ "Xjk8":
/*!***************************************************************!*\
  !*** ./src/app/components/spotlight/spotlight.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spotlight, .header {\n  width: 100%;\n  height: 50vh;\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 20px;\n  position: relative;\n  background-repeat: no-repeat;\n  z-index: 0;\n}\n.spotlight h1, .header h1 {\n  font-weight: bold;\n  color: white;\n  text-shadow: 0 0 8px black;\n}\n.gradient {\n  background: linear-gradient(#ffffff00 65%, #fff 100%);\n  width: 100%;\n  height: 100%;\n}\n.gradient .detail {\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  text-align: center;\n  font-weight: bolder;\n}\n.gradient .action-buttons {\n  margin: auto;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  justify-content: space-around;\n}\n.gradient .btn {\n  font-size: 12px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 15px;\n}\n@media screen and (orientation: landscape) {\n  .spotlight {\n    height: 85vh;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .gradient {\n    background: linear-gradient(#ffffff00 40%, #000 95%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Nwb3RsaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFDUjtBQUdBO0VBQ0kscURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFSO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDZCQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUZSO0FBTUE7RUFDSTtJQUNJLFlBQUE7RUFITjtBQUNGO0FBTUE7RUFDSTtJQUNJLG9EQUFBO0VBSk47QUFDRiIsImZpbGUiOiJzcG90bGlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BvdGxpZ2h0LCAuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB6LWluZGV4OiAwO1xuXG4gICAgaDEge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDhweCByZ2IoMCwgMCwgMCk7XG4gICAgfVxufVxuXG4uZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmMDAgNjUlLCAjZmZmIDEwMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5kZXRhaWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKXtcbiAgICAuc3BvdGxpZ2h0IHtcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5ncmFkaWVudCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmMDAgNDAlLCAjMDAwIDk1JSk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "amR5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/item-vertical-list/item-vertical-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-weight: bold;\n}\n\n.title {\n  margin-top: 15px;\n}\n\nion-thumbnail {\n  width: 120px;\n  height: auto;\n}\n\nion-thumbnail ion-img {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tdmVydGljYWwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0FBQ1IiLCJmaWxlIjoiaXRlbS12ZXJ0aWNhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgaW9uLWltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    pwaUrl: "https://fletnix-f4987.web.app/",
    TMDB_API_KEY: "e5dadb1552b7dbcc7c22ffbfc594f4bf",
    firebaseConfig: {
        apiKey: "AIzaSyBLRCCY1l2sxrwl2mmFC5mcWzO__JNe4nU",
        authDomain: "fletnix-f4987.firebaseapp.com",
        projectId: "fletnix-f4987",
        storageBucket: "fletnix-f4987.appspot.com",
        messagingSenderId: "1094026885734",
        appId: "1:1094026885734:web:624c2fb3c47b476367cba7",
        measurementId: "G-M5E5TT2Z6W"
    }
};


/***/ }),

/***/ "eSsf":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/youtube-iframe/youtube-iframe.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"conteneur\" *ngIf=\"trustedSource\">\n  <iframe [src]=\"trustedSource\" frameborder=\"0\" allowfullscreen></iframe>\n</div>");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_horizontal_list_item_horizontal_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-horizontal-list/item-horizontal-list.component */ "u/aB");
/* harmony import */ var _spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spotlight/spotlight.component */ "H+Hz");
/* harmony import */ var _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./back-button/back-button.component */ "4C5V");
/* harmony import */ var _youtube_iframe_youtube_iframe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youtube-iframe/youtube-iframe.component */ "3cUv");
/* harmony import */ var _item_vertical_list_item_vertical_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-vertical-list/item-vertical-list.component */ "xNr+");
/* harmony import */ var _no_result_no_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./no-result/no-result.component */ "V++x");
/* harmony import */ var _close_modal_button_close_modal_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./close-modal-button/close-modal-button.component */ "NPC+");












const components = [
    _item_horizontal_list_item_horizontal_list_component__WEBPACK_IMPORTED_MODULE_5__["ItemHorizontalListComponent"],
    _spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_6__["SpotlightComponent"],
    _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__["BackButtonComponent"],
    _youtube_iframe_youtube_iframe_component__WEBPACK_IMPORTED_MODULE_8__["YoutubeIframeComponent"],
    _item_vertical_list_item_vertical_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemVerticalListComponent"],
    _no_result_no_result_component__WEBPACK_IMPORTED_MODULE_10__["NoResultComponent"],
    _close_modal_button_close_modal_button_component__WEBPACK_IMPORTED_MODULE_11__["CloseModalButtonComponent"]
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: components,
        exports: components
    })
], ComponentsModule);



/***/ }),

/***/ "jF1H":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-horizontal-list/item-horizontal-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ title }}</h1>\n\n<ion-slides [options]=\"slidesOptions\">\n  <ion-slide *ngFor=\"let item of items\">\n    <img (click)=\"showDetailModal(item)\" [src]=\"item.poster_path\">\n  </ion-slide>\n</ion-slides>");

/***/ }),

/***/ "kCmQ":
/*!*************************************************************************!*\
  !*** ./src/app/components/youtube-iframe/youtube-iframe.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".conteneur {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n}\n\n.conteneur iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3lvdXR1YmUtaWZyYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJ5b3V0dWJlLWlmcmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5ldXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG59XG5cbi5jb250ZW5ldXIgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "neG6":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-detail/item-preview-modal/item-preview-modal.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <app-close-modal-button></app-close-modal-button>\n    \n    <div *ngIf=\"itemDetail\">\n        <app-item-preview [isModal]=\"true\" [itemDetail]=\"itemDetail\" [showInfos]=\"true\"></app-item-preview>\n    </div>\n</ion-content>");

/***/ }),

/***/ "nyzE":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-vertical-list/item-vertical-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-list-header *ngIf=\"title\" mode=\"ios\">\n    <ion-label class=\"title\">{{ title }}</ion-label>\n  </ion-list-header>\n    <ng-container *ngFor=\"let item of items\" >\n      <ion-item *ngIf=\"item.backdrop_path || item.poster_path\" (click)=\"goToDetail(item)\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img #img [src]=\"item.backdrop_path || item.poster_path\" (ionError)=\"img.src = ''\"></ion-img>\n        </ion-thumbnail>\n        <ion-label class=\"ion-text-wrap\">{{ item.title ? item.title : item.name }}</ion-label>\n      </ion-item>\n    </ng-container>\n</ion-list>");

/***/ }),

/***/ "oN/V":
/*!***********************************************!*\
  !*** ./src/app/services/tmdb/tmdb.service.ts ***!
  \***********************************************/
/*! exports provided: TMDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMDBService", function() { return TMDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tmdbApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tmdbApiClient */ "4l1R");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/EBackdropSizes */ "KoVS");
/* harmony import */ var _models_EPosterSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/EPosterSizes */ "WZE1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var TMDBService_1;







let TMDBService = TMDBService_1 = class TMDBService {
    constructor(ioHttpClient) {
        this.ioHttpClient = ioHttpClient;
        this.moTMDBApiClient = new _tmdbApiClient__WEBPACK_IMPORTED_MODULE_2__["TMDBApiClient"](this.ioHttpClient);
    }
    getItemDetail(poItem) {
        if (this.getMediaType(poItem) === "movie") {
            return this.moTMDBApiClient.getMovie(poItem.id);
        }
        else {
            return this.moTMDBApiClient.getSerie(poItem.id);
        }
    }
    getMovie(pnMovieId) {
        return this.moTMDBApiClient.getMovie(pnMovieId);
    }
    getSerie(pnSerieId) {
        return this.moTMDBApiClient.getSerie(pnSerieId);
    }
    getMovies(poParameters) {
        return this.moTMDBApiClient.getMovies(poParameters);
    }
    getSeries(poParameters) {
        return this.moTMDBApiClient.getSeries(poParameters);
    }
    getTrendingMovies(poParameters) {
        return this.moTMDBApiClient.getTrendingMovies(poParameters);
    }
    getTrendingSeries(poParameters) {
        return this.moTMDBApiClient.getTrendingSeries(poParameters);
    }
    getBestTrending(poParameters) {
        return this.moTMDBApiClient.getBestTrending(poParameters);
    }
    getWatchProviders(poItem) {
        if (this.getMediaType(poItem) === "movie") {
            return this.moTMDBApiClient.getMovieProviders(poItem.id);
        }
        else {
            return this.moTMDBApiClient.getSerieProviders(poItem.id);
        }
    }
    getItemYoutubeVideos(poItem) {
        if (this.getMediaType(poItem) === "movie") {
            return this.moTMDBApiClient.getMovieYoutubeVideos(poItem.id);
        }
        else {
            return this.moTMDBApiClient.getSerieYoutubeVideos(poItem.id);
        }
    }
    search(psQuery) {
        return this.moTMDBApiClient.search(psQuery)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((poItemsResponse) => poItemsResponse.results.filter((poItem) => poItem.media_type === "movie" || poItem.media_type === "tv")));
    }
    addImagePathToItem(poItem, psBackdropSize, psPosterSize) {
        if (poItem.backdrop_path)
            poItem.backdrop_path = `${TMDBService_1.imagePath}${psBackdropSize ? `/${psBackdropSize}` : `/${_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_4__["EBackdropSizes"].original}`}${poItem.backdrop_path}`;
        if (poItem.poster_path)
            poItem.poster_path = `${TMDBService_1.imagePath}${psPosterSize ? `/${psPosterSize}` : `/${_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_5__["EPosterSizes"].original}`}${poItem.poster_path}`;
        if (poItem.logo_path)
            poItem.logo_path = `${TMDBService_1.imagePath}/${_models_EPosterSizes__WEBPACK_IMPORTED_MODULE_5__["EPosterSizes"].original}${poItem.logo_path}`;
        return poItem;
    }
    getMediaType(poItem) {
        if (poItem.title)
            return "movie";
        else
            return "tv";
    }
};
TMDBService.imagePath = "https://image.tmdb.org/t/p";
TMDBService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TMDBService = TMDBService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TMDBService);



/***/ }),

/***/ "rJ4/":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/*! exports provided: Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "T0Ky");
/* empty/unused harmony star reexport */
const Share = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Share', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "mxtL")).then(m => new m.ShareWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "t4ZT":
/*!*******************************************************************!*\
  !*** ./src/app/components/back-button/back-button.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab {\n  position: fixed;\n  margin-top: var(--ion-safe-area-top, 0);\n}\n\nion-icon {\n  margin-left: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImJhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKTtcbn1cblxuaW9uLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "u/aB":
/*!***********************************************************************************!*\
  !*** ./src/app/components/item-horizontal-list/item-horizontal-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemHorizontalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHorizontalListComponent", function() { return ItemHorizontalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_horizontal_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-horizontal-list.component.html */ "jF1H");
/* harmony import */ var _item_horizontal_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-horizontal-list.component.scss */ "9rzz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_detail_item_preview_modal_item_preview_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../item-detail/item-preview-modal/item-preview-modal.component */ "1V/n");






let ItemHorizontalListComponent = class ItemHorizontalListComponent {
    constructor(ioModalCtrl) {
        this.ioModalCtrl = ioModalCtrl;
        this.slidesOptions = {
            freeMode: true,
            breakpoints: {
                // when window width is >= 1px
                1: {
                    slidesPerView: 3.2,
                    spaceBetween: 8
                },
                // when window width is >= 320px
                425: {
                    slidesPerView: 5.2,
                    spaceBetween: 8
                },
                // when window width is >= 600px
                600: {
                    slidesPerView: 7.2,
                    spaceBetween: 8
                },
                // when window width is >= 800px
                800: {
                    slidesPerView: 9.2,
                    spaceBetween: 8
                }
            }
        };
    }
    ngOnInit() { }
    showDetailModal(poItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loDetailModal = yield this.ioModalCtrl.create({
                component: _item_detail_item_preview_modal_item_preview_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemPreviewModalComponent"],
                componentProps: {
                    item: poItem
                }
            });
            loDetailModal.present();
        });
    }
};
ItemHorizontalListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ItemHorizontalListComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemHorizontalListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-horizontal-list',
        template: _raw_loader_item_horizontal_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_horizontal_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemHorizontalListComponent);



/***/ }),

/***/ "xNr+":
/*!*******************************************************************************!*\
  !*** ./src/app/components/item-vertical-list/item-vertical-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemVerticalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVerticalListComponent", function() { return ItemVerticalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_vertical_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-vertical-list.component.html */ "nyzE");
/* harmony import */ var _item_vertical_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-vertical-list.component.scss */ "amR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tmdb/tmdb.service */ "oN/V");






let ItemVerticalListComponent = class ItemVerticalListComponent {
    constructor(isvcTMDB, ioRouter) {
        this.isvcTMDB = isvcTMDB;
        this.ioRouter = ioRouter;
    }
    ngOnInit() { }
    goToDetail(poItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isvcTMDB.getMediaType(poItem) === "movie")
                this.ioRouter.navigate([this.ioRouter.url, 'movie', poItem.id]);
            else
                this.ioRouter.navigate([this.ioRouter.url, 'tv', poItem.id]);
        });
    }
};
ItemVerticalListComponent.ctorParameters = () => [
    { type: _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_5__["TMDBService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ItemVerticalListComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemVerticalListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-vertical-list',
        template: _raw_loader_item_vertical_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_vertical_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemVerticalListComponent);



/***/ })

}]);
//# sourceMappingURL=default~favorites-favorites-module~home-home-module~search-search-module~watch-list-watch-list-module.js.map