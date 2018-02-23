"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var status_bar_1 = require("@ionic-native/status-bar");
var splash_screen_1 = require("@ionic-native/splash-screen");
var firestore_1 = require("angularfire2/firestore");
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, af) {
        var _this = this;
        this.af = af;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var authentUser = this.af.app.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.rootPage = 'HomePage';
            }
            else {
                _this.rootPage = 'RegisterPage';
            }
        });
    }
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [ionic_angular_1.Platform, status_bar_1.StatusBar, splash_screen_1.SplashScreen, firestore_1.AngularFirestore])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
