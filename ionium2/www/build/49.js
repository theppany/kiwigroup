webpackJsonp([49],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This Component need :
 * - timer components. Load it in component
 * - timer-progress components. Load it in component
 */
var CountdownPage = (function () {
    function CountdownPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    return CountdownPage;
}());
CountdownPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-countdown',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/miscellaneous/countdown/countdown.html"*/'<ion-header >\n	<ion-navbar color="primary">\n		<ion-title>Countdown</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h2>Countdown Timer</h2>\n	<timer #countdownTimer [timeInSeconds]="2700"></timer>\n	<timer-progress #countdownTimerProgress [timeInSeconds]="2700"></timer-progress>\n</ion-content>'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/miscellaneous/countdown/countdown.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]])
], CountdownPage);

//# sourceMappingURL=countdown.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPageModule", function() { return CountdownPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countdown__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CountdownPageModule = (function () {
    function CountdownPageModule() {
    }
    return CountdownPageModule;
}());
CountdownPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__countdown__["a" /* CountdownPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__countdown__["a" /* CountdownPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__countdown__["a" /* CountdownPage */]
        ]
    })
], CountdownPageModule);

//# sourceMappingURL=countdown.module.js.map

/***/ })

});
//# sourceMappingURL=49.js.map