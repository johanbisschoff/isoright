var login_service_1 = require('./login.service');
var authentication_service_1 = require('./authentication.service');
var loginService = null;
function main() {
    'use strict';
    describe('Login', function () {
        var authenticationService = new authentication_service_1.AuthenticationService();
        describe('login(username,password)', function () {
            beforeEach(function () {
                loginService = new login_service_1.LoginService();
                loginService.logout();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
            });
            it('should call login when calling login', function () {
                spyOn(loginService, 'login');
                loginService.login('user', 'pass');
                expect(loginService.login).toHaveBeenCalledWith('user', 'pass');
            });
            it('should return false if not using correct password', function (done) {
                loginService.login('user', 'pass').then(function (authPassed) {
                    expect(authPassed).toBe(false);
                    done();
                });
            });
            it('should return true auth if correct password is used', function (done) {
                loginService.login('admin', 'admin').then(function (authPassed) {
                    expect(authPassed).toBe(true);
                    done();
                });
            });
            it('should have a token after a valid login', function (done) {
                loginService.login('admin', 'admin').then(function (authPassed) {
                    authenticationService.getToken().then(function (token) {
                        expect(token).not.toBeNull();
                        done();
                    });
                });
            });
            it('should have a null token after an invalid login', function (done) {
                loginService.login('user', 'pass').then(function (authPassed) {
                    authenticationService.getToken().then(function (token) {
                        expect(token).toBeNull();
                        done();
                    });
                });
            });
        });
        describe('logout()', function () {
            beforeEach(function () {
                loginService = new login_service_1.LoginService();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
            });
            it('should call logout when calling logout', function () {
                spyOn(loginService, 'logout');
                loginService.logout();
                expect(loginService.logout).toHaveBeenCalled();
            });
            it('should have nothing in the token once logout is called', function (done) {
                loginService.logout();
                authenticationService.getToken().then(function (token) {
                    expect(token).toBeNull();
                    done();
                });
            });
        });
    });
}
exports.main = main;
