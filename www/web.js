(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "Fy9G":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/web.js ***!
  \*********************************************************/
/*! exports provided: NetworkWeb, Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkWeb", function() { return NetworkWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

function translatedConnection() {
    const connection = window.navigator.connection ||
        window.navigator.mozConnection ||
        window.navigator.webkitConnection;
    let result = 'unknown';
    const type = connection ? connection.type || connection.effectiveType : null;
    if (type && typeof type === 'string') {
        switch (type) {
            // possible type values
            case 'bluetooth':
            case 'cellular':
                result = 'cellular';
                break;
            case 'none':
                result = 'none';
                break;
            case 'ethernet':
            case 'wifi':
            case 'wimax':
                result = 'wifi';
                break;
            case 'other':
            case 'unknown':
                result = 'unknown';
                break;
            // possible effectiveType values
            case 'slow-2g':
            case '2g':
            case '3g':
                result = 'cellular';
                break;
            case '4g':
                result = 'wifi';
                break;
            default:
                break;
        }
    }
    return result;
}
class NetworkWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
        this.handleOnline = () => {
            const connectionType = translatedConnection();
            const status = {
                connected: true,
                connectionType: connectionType,
            };
            this.notifyListeners('networkStatusChange', status);
        };
        this.handleOffline = () => {
            const status = {
                connected: false,
                connectionType: 'none',
            };
            this.notifyListeners('networkStatusChange', status);
        };
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);
    }
    async getStatus() {
        if (!window.navigator) {
            throw this.unavailable('Browser does not support the Network Information API');
        }
        const connected = window.navigator.onLine;
        const connectionType = translatedConnection();
        const status = {
            connected,
            connectionType: connected ? connectionType : 'none',
        };
        return status;
    }
}
const Network = new NetworkWeb();

//# sourceMappingURL=web.js.map

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

/***/ "MPOP":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/dialog/dist/esm/web.js ***!
  \********************************************************/
/*! exports provided: DialogWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWeb", function() { return DialogWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class DialogWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async alert(options) {
        window.alert(options.message);
    }
    async prompt(options) {
        const val = window.prompt(options.message, options.inputText || '');
        return {
            value: val !== null ? val : '',
            cancelled: val === null,
        };
    }
    async confirm(options) {
        const val = window.confirm(options.message);
        return {
            value: val,
        };
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "isrx":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/web.js ***!
  \*********************************************************/
/*! exports provided: HapticsWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsWeb", function() { return HapticsWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "Iqe0");


class HapticsWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super(...arguments);
        this.selectionStarted = false;
    }
    async impact(options) {
        const pattern = this.patternForImpact(options === null || options === void 0 ? void 0 : options.style);
        this.vibrateWithPattern(pattern);
    }
    async notification(options) {
        const pattern = this.patternForNotification(options === null || options === void 0 ? void 0 : options.type);
        this.vibrateWithPattern(pattern);
    }
    async vibrate(options) {
        const duration = (options === null || options === void 0 ? void 0 : options.duration) || 300;
        this.vibrateWithPattern([duration]);
    }
    async selectionStart() {
        this.selectionStarted = true;
    }
    async selectionChanged() {
        if (this.selectionStarted) {
            this.vibrateWithPattern([70]);
        }
    }
    async selectionEnd() {
        this.selectionStarted = false;
    }
    patternForImpact(style = _definitions__WEBPACK_IMPORTED_MODULE_1__["ImpactStyle"].Heavy) {
        if (style === _definitions__WEBPACK_IMPORTED_MODULE_1__["ImpactStyle"].Medium) {
            return [43];
        }
        else if (style === _definitions__WEBPACK_IMPORTED_MODULE_1__["ImpactStyle"].Light) {
            return [20];
        }
        return [61];
    }
    patternForNotification(type = _definitions__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Success) {
        if (type === _definitions__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Warning) {
            return [30, 40, 30, 50, 60];
        }
        else if (type === _definitions__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Error) {
            return [27, 45, 50];
        }
        return [35, 65, 21];
    }
    vibrateWithPattern(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
        else {
            throw this.unavailable('Browser does not support the vibrate API');
        }
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "mxtL":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/web.js ***!
  \*******************************************************/
/*! exports provided: ShareWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareWeb", function() { return ShareWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class ShareWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async share(options) {
        if (typeof navigator === 'undefined' || !navigator.share) {
            throw this.unavailable('Share API not available in this browser');
        }
        await navigator.share({
            title: options.title,
            text: options.text,
            url: options.url,
        });
        return {};
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web.js.map