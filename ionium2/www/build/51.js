webpackJsonp([51],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizingTextarea; });
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
 * - autosize components. Load it in directives
 */
var AutosizingTextarea = (function () {
    function AutosizingTextarea(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dummyText = "Hello I am autosizing textarea.\n    I automatically adjusts to accommodate my content.\n    I increase and decrease my size based on my content.\n    Try by removing few lines or adding few new lines of text to see what I am able to do.";
    }
    return AutosizingTextarea;
}());
AutosizingTextarea = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-autosizing-textarea',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/miscellaneous/autosizing-textarea/autosizing-textarea.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n    <ion-title>Autosizing Textarea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-textarea name="dummyText" [(ngModel)]="dummyText" autosize></ion-textarea>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/miscellaneous/autosizing-textarea/autosizing-textarea.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], AutosizingTextarea);

//# sourceMappingURL=autosizing-textarea.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizingTextareaPageModule", function() { return AutosizingTextareaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autosizing_textarea__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AutosizingTextareaPageModule = (function () {
    function AutosizingTextareaPageModule() {
    }
    return AutosizingTextareaPageModule;
}());
AutosizingTextareaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__autosizing_textarea__["a" /* AutosizingTextarea */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__autosizing_textarea__["a" /* AutosizingTextarea */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__autosizing_textarea__["a" /* AutosizingTextarea */],
        ]
    })
], AutosizingTextareaPageModule);

//# sourceMappingURL=autosizing-textarea.module.js.map

/***/ })

});
//# sourceMappingURL=51.js.map