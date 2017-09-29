webpackJsonp([16],{

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingListPage; });
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



var SettingListPage = (function () {
    function SettingListPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.rootPage = 'SettingListPage';
        this.menu.enable(true, 'menu-profile');
        this.items = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["n" /* LISTMENUSETTING */];
    }
    SettingListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.component);
    };
    return SettingListPage;
}());
SettingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting-list',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/setting/setting-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Setting</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        {{item.title}}\n      </button>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/setting/setting-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]])
], SettingListPage);

//# sourceMappingURL=setting-list.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingListPageModule", function() { return SettingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setting_list__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingListPageModule = (function () {
    function SettingListPageModule() {
    }
    return SettingListPageModule;
}());
SettingListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__setting_list__["a" /* SettingListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__setting_list__["a" /* SettingListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__setting_list__["a" /* SettingListPage */]
        ]
    })
], SettingListPageModule);

//# sourceMappingURL=setting-list.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map