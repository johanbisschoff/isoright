var dashboard_1 = require('./dashboard');
var testing_1 = require('angular2/testing');
var standards_service_1 = require('../../services/standards.service');
var dashboardPage = null;
function main() {
    'use strict';
    var standardsService = new standards_service_1.StandardsService();
    describe('DashboardPage', function () {
        beforeEach(function () {
            dashboardPage = new dashboard_1.DashboardPage(null, standardsService);
        });
        testing_1.it('should do nothing', function () {
            expect(true).toBe(true);
        });
    });
}
exports.main = main;
