webpackJsonp([60],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homev1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global_setting__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Homev1Page = (function () {
    function Homev1Page(navCtrl) {
        this.navCtrl = navCtrl;
        //Main Menu
        this.pages = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["p" /* PAGES */];
    }
    Homev1Page.prototype.showList = function (pages) {
        this.navCtrl.setRoot(pages.page);
    };
    return Homev1Page;
}());
Homev1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-homev1',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/home/homev1/homev1.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Dashboard v1 </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-slides pager autoplay="1000" loop="true" speed="1000">\n    <ion-slide>\n      <div class="slide-item" style="background-image: url(assets/img/home/2.jpg)"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class="slide-item" style="background-image: url(assets/img/home/3.jpg)"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class="slide-item" style="background-image: url(assets/img/home/4.jpg)"></div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let item of pages; let i = index" col-4 col-sm-4 col-md-6 col-lg-4 col-xl-2 text-center>\n        <button (click)="showList(item)" >\n          <ion-icon color="primary" name="{{ item.icon }}"></ion-icon> <br> {{ item.title }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/home/homev1/homev1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
], Homev1Page);

//# sourceMappingURL=homev1.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginListPageModule", function() { return LoginListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homev1__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginListPageModule = (function () {
    function LoginListPageModule() {
    }
    return LoginListPageModule;
}());
LoginListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__homev1__["a" /* Homev1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__homev1__["a" /* Homev1Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__homev1__["a" /* Homev1Page */]
        ]
    })
], LoginListPageModule);

//# sourceMappingURL=homev1.module.js.map

/***/ })

});
//# sourceMappingURL=60.js.map