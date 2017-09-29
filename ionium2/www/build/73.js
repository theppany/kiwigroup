webpackJsonp([73],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudStorageDetailPage; });
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


var CrudStorageDetailPage = (function () {
    function CrudStorageDetailPage(platform, navParams, viewCtrl) {
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dataNotes = this.navParams.get('charSend');
        if (this.dataNotes.id === null) {
            this.dataNotes.id = new Date().getTime();
        }
    }
    CrudStorageDetailPage.prototype.saveNotes = function () {
        this.viewCtrl.dismiss(this.dataNotes);
    };
    CrudStorageDetailPage.prototype.back = function () {
        this.viewCtrl.dismiss(null);
    };
    return CrudStorageDetailPage;
}());
CrudStorageDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      crud storage detail\n    </ion-title>\n    <ion-buttons end (click)=\"back()\">\n        <span ion-text showWhen=\"ios\"> Cancel </span>\n        <button ion-button icon-only color=\"royal\">\n            <ion-icon name=\"close\"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-input type=\"text\" [(ngModel)]=\"dataNotes.title\" placeholder=\"New Note Title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"dataNotes.text\" placeholder=\"Your Text Here\"></ion-textarea>\n  </ion-item>\n  <ion-col>\n    <button ion-button color=\"primary\" (click)=\"saveNotes()\"> Save </button>\n    <button ion-button color=\"danger\" (click)=\"back()\"> Back </button>\n  </ion-col>\n</ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
], CrudStorageDetailPage);

//# sourceMappingURL=crud-storage-detail.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudStorageDetailPageModule", function() { return CrudStorageDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_storage_detail__ = __webpack_require__(1002);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrudStorageDetailPageModule = (function () {
    function CrudStorageDetailPageModule() {
    }
    return CrudStorageDetailPageModule;
}());
CrudStorageDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__crud_storage_detail__["a" /* CrudStorageDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crud_storage_detail__["a" /* CrudStorageDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__crud_storage_detail__["a" /* CrudStorageDetailPage */]
        ]
    })
], CrudStorageDetailPageModule);

//# sourceMappingURL=crud-storage-detail.module.js.map

/***/ })

});
//# sourceMappingURL=73.js.map