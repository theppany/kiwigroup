webpackJsonp([76],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudFirebaseListPageModule", function() { return CrudFirebaseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_firebase_list__ = __webpack_require__(997);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrudFirebaseListPageModule = (function () {
    function CrudFirebaseListPageModule() {
    }
    return CrudFirebaseListPageModule;
}());
CrudFirebaseListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__crud_firebase_list__["a" /* CrudFirebaseListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crud_firebase_list__["a" /* CrudFirebaseListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__crud_firebase_list__["a" /* CrudFirebaseListPage */]
        ]
    })
], CrudFirebaseListPageModule);

//# sourceMappingURL=crud-firebase-list.module.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudFirebaseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase_database__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudFirebaseListPage = (function () {
    function CrudFirebaseListPage(loadingCtrl, navCtrl, navParams, firebaseDBProvider) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseDBProvider = firebaseDBProvider;
        this.dataNotes = {};
        this.notesItems = this.firebaseDBProvider.getNotesDB();
        console.log(this.notesItems);
    }
    CrudFirebaseListPage.prototype.ionViewDidLoad = function () {
        var loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 10000 });
        loader.present();
        if (this.notesItems)
            loader.dismiss();
    };
    CrudFirebaseListPage.prototype.addNotes = function (event) {
        this.navCtrl.push('CrudFirebaseDetailPage', {
            item: {}
        });
    };
    CrudFirebaseListPage.prototype.editNotes = function (event, notesItem) {
        this.navCtrl.push('CrudFirebaseDetailPage', {
            item: notesItem
        });
    };
    CrudFirebaseListPage.prototype.deleteNotes = function (id) {
        this.firebaseDBProvider.deleteNotesDB(id);
    };
    return CrudFirebaseListPage;
}());
CrudFirebaseListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-crud-firebase-list',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/crud/crud-firebase-list/crud-firebase-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CRUD Firebase (Notes)</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addNotes()" icon-only color="royal">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n \n  <ion-list>\n    <ion-item-sliding *ngFor="let item of notesItems | async">\n      <ion-item (click)="editNotes($event, item)">\n        {{ item.title }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="deleteNotes(item.$key)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/crud/crud-firebase-list/crud-firebase-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase_database__["a" /* FirebaseDatabaseProvider */]])
], CrudFirebaseListPage);

//# sourceMappingURL=crud-firebase-list.js.map

/***/ })

});
//# sourceMappingURL=76.js.map