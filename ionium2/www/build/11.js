webpackJsonp([11],{

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideFreeModePage; });
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


var SlideFreeModePage = (function () {
    function SlideFreeModePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            }
        ];
        for (var i = 0; i < 20; i++) {
            this.slides.push(this.slides[i % 4]);
        }
    }
    SlideFreeModePage.prototype.ngAfterViewInit = function () {
        this.slider.freeMode = true;
    };
    return SlideFreeModePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
], SlideFreeModePage.prototype, "slider", void 0);
SlideFreeModePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-slide-free-mode',template:/*ion-inline-start:"/Users/mirzailhami/Dropbox/ionium2/src/pages/slide/slide-free-mode/slide-free-mode.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Free Mode Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides #slider spaceBetween="10" slidesPerView="2">\n    <ion-slide *ngFor="let slide of slides"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"/Users/mirzailhami/Dropbox/ionium2/src/pages/slide/slide-free-mode/slide-free-mode.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
], SlideFreeModePage);

//# sourceMappingURL=slide-free-mode.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideFreeModePageModule", function() { return SlideFreeModePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_free_mode__ = __webpack_require__(1135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideFreeModePageModule = (function () {
    function SlideFreeModePageModule() {
    }
    return SlideFreeModePageModule;
}());
SlideFreeModePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__slide_free_mode__["a" /* SlideFreeModePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_free_mode__["a" /* SlideFreeModePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__slide_free_mode__["a" /* SlideFreeModePage */]
        ]
    })
], SlideFreeModePageModule);

//# sourceMappingURL=slide-free-mode.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map