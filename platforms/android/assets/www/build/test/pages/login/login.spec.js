var login_1 = require('./login');
var authentication_service_1 = require('../../services/authentication.service');
var loginPage = null;
function main() {
    'use strict';
    var authenticationService = new authentication_service_1.AuthenticationService();
    describe('LoginPage', function () {
        beforeEach(function () {
            loginPage = new login_1.LoginPage(null, null, authenticationService);
        });
        it('should call login when calling login', function () {
            spyOn(loginPage, 'login');
            loginPage.login();
            expect(loginPage.login).toHaveBeenCalled();
        });
    });
}
exports.main = main;
