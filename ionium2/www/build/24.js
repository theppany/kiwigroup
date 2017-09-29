webpackJsonp([24],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeYoutubePlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_youtube_video_player__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeYoutubePlayerPage = (function () {
    function NativeYoutubePlayerPage(youtube, platform, alertCtrl) {
        this.youtube = youtube;
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
    NativeYoutubePlayerPage.prototype.playVideo = function () {
        this.youtube.openVideo('2IXvWAd8kG0');
    };
    return NativeYoutubePlayerPage;
}());
NativeYoutubePlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-native-youtube-player',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/native/native-youtube-player/native-youtube-player.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Youtube Player</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="playVideo()"> Play Video </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/native/native-youtube-player/native-youtube-player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], NativeYoutubePlayerPage);

//# sourceMappingURL=native-youtube-player.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeYoutubePlayerPageModule", function() { return NativeYoutubePlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_youtube_player__ = __webpack_require__(1122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeYoutubePlayerPageModule = (function () {
    function NativeYoutubePlayerPageModule() {
    }
    return NativeYoutubePlayerPageModule;
}());
NativeYoutubePlayerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__native_youtube_player__["a" /* NativeYoutubePlayerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_youtube_player__["a" /* NativeYoutubePlayerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__native_youtube_player__["a" /* NativeYoutubePlayerPage */]
        ]
    })
], NativeYoutubePlayerPageModule);

//# sourceMappingURL=native-youtube-player.module.js.map

/***/ })

});
//# sourceMappingURL=24.js.map