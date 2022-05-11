(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "4T2B":
/*!***********************************************************!*\
  !*** ./src/app/item-detail/item-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ItemDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageRoutingModule", function() { return ItemDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ "XZMK");




const routes = [
    {
        path: '',
        component: _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]
    }
];
let ItemDetailPageRoutingModule = class ItemDetailPageRoutingModule {
};
ItemDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailPageRoutingModule);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "MEjN":
/*!******************************************************!*\
  !*** ./src/app/item-detail/item/item.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.iframe {\n  min-width: 85%;\n  max-width: 700px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWZyYW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5pZnJhbWUge1xuICAgIG1pbi13aWR0aDogODUlO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "XZMK":
/*!****************************************************!*\
  !*** ./src/app/item-detail/item/item.component.ts ***!
  \****************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item.component.html */ "s+Me");
/* harmony import */ var _item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.component.scss */ "MEjN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tmdb/tmdb.service */ "oN/V");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tmdb/models/EBackdropSizes */ "KoVS");








let ItemComponent = class ItemComponent {
    constructor(ioRouter, ioRoute, isvcTMDB) {
        this.ioRouter = ioRouter;
        this.ioRoute = ioRoute;
        this.isvcTMDB = isvcTMDB;
    }
    ngOnInit() {
        const lnItemId = +this.ioRoute.snapshot.params.id;
        if (this.ioRouter.url.includes("movie")) {
            this.isvcTMDB.getMovie(lnItemId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((poMovie) => {
                this.isvcTMDB.addImagePathToItem(poMovie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_7__["EBackdropSizes"]['1280px']);
                this.itemDetail = poMovie;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.getData(this.itemDetail))).subscribe();
        }
        else {
            this.isvcTMDB.getSerie(lnItemId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((poSerie) => {
                this.isvcTMDB.addImagePathToItem(poSerie, _services_tmdb_models_EBackdropSizes__WEBPACK_IMPORTED_MODULE_7__["EBackdropSizes"]['1280px']);
                this.itemDetail = poSerie;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.getData(this.itemDetail))).subscribe();
        }
    }
    getData(poItem) {
        return this.isvcTMDB.getWatchProviders(poItem)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((poProvidersResponse) => {
            var _a, _b, _c, _d;
            (_b = (_a = poProvidersResponse.results.FR) === null || _a === void 0 ? void 0 : _a.flatrate) === null || _b === void 0 ? void 0 : _b.forEach((poProvider) => this.isvcTMDB.addImagePathToItem(poProvider));
            if ((_c = poProvidersResponse.results.FR) === null || _c === void 0 ? void 0 : _c.flatrate)
                this.itemDetail.providers = (_d = poProvidersResponse.results.FR) === null || _d === void 0 ? void 0 : _d.flatrate;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.isvcTMDB.getItemYoutubeVideos(this.itemDetail)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((poVideosResponse) => {
            if (poVideosResponse.results)
                this.itemDetail.videos = poVideosResponse.results.filter((poVideo) => poVideo.site === "YouTube");
        }));
    }
};
ItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_5__["TMDBService"] }
];
ItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item',
        template: _raw_loader_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemComponent);



/***/ }),

/***/ "ZPl8":
/*!********************************************************************!*\
  !*** ./src/app/item-detail/item-preview/item-preview.component.ts ***!
  \********************************************************************/
/*! exports provided: ItemPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPreviewComponent", function() { return ItemPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-preview.component.html */ "hPz7");
/* harmony import */ var _item_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-preview.component.scss */ "p6nN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ItemPreviewComponent = class ItemPreviewComponent {
    constructor() { }
    ngOnInit() { }
    getHoursAndMinutes(pnRuntime) {
        const lnHours = (pnRuntime / 60);
        const lnResHours = Math.floor(lnHours);
        const lnMinutes = (lnHours - lnResHours) * 60;
        const lnResMinutes = Math.round(lnMinutes);
        return lnHours > 0 ? `${lnResHours}h${lnResMinutes}m` : `${lnResMinutes}m`;
    }
};
ItemPreviewComponent.ctorParameters = () => [];
ItemPreviewComponent.propDecorators = {
    itemDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showInfos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-preview',
        template: _raw_loader_item_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemPreviewComponent);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hPz7":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-detail/item-preview/item-preview.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"itemDetail\">\n  <app-spotlight [item]=\"itemDetail\" [isModal]=\"isModal\" [showInfos]=\"showInfos\"></app-spotlight>\n\n  <div class=\"detail\">\n      <div class=\"providers\">\n          <img *ngFor=\"let provider of itemDetail.providers\" [src]=\"provider.logo_path\">\n      </div>\n\n      <p class=\"date-time\">{{ itemDetail.release_date | date: \"YYYY\"}} {{ itemDetail.runtime ? this.getHoursAndMinutes(itemDetail.runtime) : \"\" }}</p>\n      <div class=\"tags\">\n          <ion-chip *ngFor=\"let genre of itemDetail.genres\" color=\"danger\"> \n              <ion-label color=\"danger\">{{ genre.name }}</ion-label>\n          </ion-chip>\n      </div>\n      <p class=\"description\">{{ itemDetail.overview }}</p>\n  </div>\n</div>");

/***/ }),

/***/ "p6nN":
/*!**********************************************************************!*\
  !*** ./src/app/item-detail/item-preview/item-preview.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detail {\n  padding: 0 20px;\n  margin-top: -20px;\n}\n.detail .description {\n  text-align: justify;\n  font-size: 0.8em;\n}\n.detail .tags {\n  margin-left: -10px;\n}\n.detail .date-time {\n  font-size: 0.9em;\n}\n.detail .providers {\n  display: flex;\n}\n.detail .providers img {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRloiLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbCB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG5cbiAgICAudGFncyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICB9XG5cbiAgICAuZGF0ZS10aW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB9XG5cbiAgICAucHJvdmlkZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "s+Me":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-detail/item/item.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-back-button></app-back-button>\n\n  <div *ngIf=\"itemDetail\">\n    <app-item-preview [itemDetail]=\"itemDetail\"></app-item-preview>\n    <div class=\"iframe-container ion-padding\">\n      <div *ngFor=\"let video of itemDetail.videos\" class=\"iframe\">\n        <app-youtube-iframe [videoId]=\"video.key\"></app-youtube-iframe>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "uBvM":
/*!***************************************************!*\
  !*** ./src/app/item-detail/item-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ItemDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailModule", function() { return ItemDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-detail-routing.module */ "4T2B");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/item.component */ "XZMK");
/* harmony import */ var _item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-preview/item-preview.component */ "ZPl8");
/* harmony import */ var _item_preview_modal_item_preview_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-preview-modal/item-preview-modal.component */ "1V/n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");










let ItemDetailModule = class ItemDetailModule {
};
ItemDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]
        ],
        declarations: [_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"], _item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_7__["ItemPreviewComponent"], _item_preview_modal_item_preview_modal_component__WEBPACK_IMPORTED_MODULE_8__["ItemPreviewModalComponent"]]
    })
], ItemDetailModule);



/***/ })

}]);
//# sourceMappingURL=common.js.map