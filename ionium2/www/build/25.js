webpackJsonp([25],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeSocialSharingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeSocialSharingPage = (function () {
    function NativeSocialSharingPage(socialSharing, platform, alertCtrl) {
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // if (!this.platform.is('cordova')) {
        //   console.warn('Cordova is not available');
        //   const alert = this.alertCtrl.create({
        //     title: 'Attention!',
        //     subTitle: 'Cordova is not available',
        //     buttons: ['Close']
        //   });
        //   alert.present();
        // }
    }
    NativeSocialSharingPage.prototype.doSosialSharing = function () {
        var _this = this;
        // Check if sharing via email is supported
        this.socialSharing.canShareViaEmail()
            .then(function () {
            // Sharing via email is possible
            _this.shareVia("email");
        }).catch(function (err) {
            // Sharing via email is not possible
            _this.errorMessage = 'can\'t share via email ' + err;
            console.log('Can\'t share via email', err);
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works on real device',
                buttons: ['Close']
            });
            alert.present();
        });
    };
    NativeSocialSharingPage.prototype.shareVia = function (shareVia) {
        var _this = this;
        if (shareVia === "email") {
            // Share via email
            this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org'])
                .then(function (success) { _this.successMessage = success; console.log('Share Via Email'); }, function (err) {
                _this.errorMessage = 'Error send via Email ' + err;
                console.log('Error send via Email', err);
                var alert = _this.alertCtrl.create({
                    title: 'Attention!',
                    subTitle: 'Only works on real device',
                    buttons: ['Close']
                });
                alert.present();
            });
        }
    };
    return NativeSocialSharingPage;
}());
NativeSocialSharingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-native-social-sharing',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/native/native-social-sharing/native-social-sharing.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Social Sharing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="doSosialSharing()"> Share </button>\n\n  <p> {{ successMessage }} </p>\n  <p> {{ errorMessage }} </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/native/native-social-sharing/native-social-sharing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], NativeSocialSharingPage);

//# sourceMappingURL=native-social-sharing.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeSocialSharingPageModule", function() { return NativeSocialSharingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_social_sharing__ = __webpack_require__(1121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeSocialSharingPageModule = (function () {
    function NativeSocialSharingPageModule() {
    }
    return NativeSocialSharingPageModule;
}());
NativeSocialSharingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__native_social_sharing__["a" /* NativeSocialSharingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_social_sharing__["a" /* NativeSocialSharingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__native_social_sharing__["a" /* NativeSocialSharingPage */]
        ]
    })
], NativeSocialSharingPageModule);

//# sourceMappingURL=native-social-sharing.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map