var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic-framework/ionic');
var login_1 = require('./pages/login/login');
var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = login_1.LoginPage;
        platform.ready().then(function () {
            // let authenticationService =  new AuthenticationService()
            // authenticationService.getToken().then(token => {
            //   this.rootPage = DashboardPage
            // })
            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            // Keyboard.setAccessoryBarVisible(false);
            //
            // For example, we might change the StatusBar color. This one below is
            // good for dark backgrounds and light text:
            // cordova.plugins.Keyboard.disableScroll(true)
            // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
        });
    }
    MyApp = __decorate([
        ionic_1.App({
            template: '<ion-nav [root]="rootPage"></ion-nav>',
            config: {} // http://ionicframework.com/docs/v2/api/config/Config/
        }), 
        __metadata('design:paramtypes', [ionic_1.Platform])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
