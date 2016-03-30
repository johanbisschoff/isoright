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
// import {TabsPage} from '../tabs/tabs'
var dashboard_1 = require('../dashboard/dashboard');
var login_service_1 = require('../../services/login.service');
var authentication_service_1 = require('../../services/authentication.service');
var LoginPage = (function () {
    function LoginPage(_nav, _loginService, _authenticationService) {
        var _this = this;
        this._nav = _nav;
        this._loginService = _loginService;
        this._authenticationService = _authenticationService;
        _authenticationService.getToken().then(function (token) {
            if (token != null) {
                _this.navNext();
            }
        });
    }
    LoginPage.prototype.presentAlert = function () {
        var alert = ionic_1.Alert.create({
            title: 'Authentication Failed',
            subTitle: 'Username or Password is invalid',
            buttons: ['Ok']
        });
        this._nav.present(alert);
    };
    LoginPage.prototype.navNext = function () {
        // this._nav.push(DashboardPage)
        this._nav.setRoot(dashboard_1.DashboardPage);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log('logging in');
        this._loginService.login(this.username, this.password).then(function (authPassed) {
            if (authPassed) {
                _this.navNext();
            }
            else {
                _this.presentAlert();
            }
        });
    };
    LoginPage = __decorate([
        ionic_1.Page({
            providers: [login_service_1.LoginService, authentication_service_1.AuthenticationService],
            templateUrl: 'build/pages/login/login.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, login_service_1.LoginService, authentication_service_1.AuthenticationService])
    ], LoginPage);
    return LoginPage;
})();
exports.LoginPage = LoginPage;
