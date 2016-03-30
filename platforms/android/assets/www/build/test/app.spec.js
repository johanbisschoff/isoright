var browser_1 = require('angular2/platform/testing/browser');
var testing_1 = require('angular2/testing');
var ionic_1 = require('ionic-framework/ionic');
var app_1 = require('../app/app');
// this needs doing _once_ for the entire test suite, hence it's here
testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
var myApp = null;
function main() {
    describe('MyApp', function () {
        beforeEach(function () {
            var platform = new ionic_1.Platform();
            myApp = new app_1.MyApp(platform);
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
        });
        it('initialises with two possible pages', function () {
            expect(myApp).not.toBeNull();
        });
    });
}
exports.main = main;
