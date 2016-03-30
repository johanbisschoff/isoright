var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var authentication_service_1 = require('./authentication.service');
var LoginService = (function () {
    function LoginService() {
        this._authenticationService = new authentication_service_1.AuthenticationService();
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (username === "admin" && password == "admin") {
                    resolve(true);
                    _this._authenticationService.setToken('1324-1324-1344');
                }
                else {
                    resolve(false);
                }
            }, 500);
        });
    };
    LoginService.prototype.logout = function () {
        this._authenticationService.clearToken();
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoginService);
    return LoginService;
})();
exports.LoginService = LoginService;
