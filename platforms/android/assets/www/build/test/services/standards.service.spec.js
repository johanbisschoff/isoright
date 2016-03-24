var testing_1 = require('angular2/testing');
var standards_service_1 = require('./standards.service');
var standardsService = null;
function main() {
    'use strict';
    describe('Standards', function () {
        describe('getIsoDashList()', function () {
            testing_1.beforeEachProviders(function () { return [standards_service_1.StandardsService]; });
            testing_1.it('standardsService should not be null', testing_1.inject([standards_service_1.StandardsService], function (standardsService) {
                expect(standardsService).not.toBeNull();
            }));
            testing_1.it('standardsService getCertifications to return a non empty array', testing_1.inject([standards_service_1.StandardsService], function (standardsService) {
                standardsService.getCertifications().then(function (items) {
                    expect(items.length).toBeGreaterThan(0);
                });
            }));
        });
    });
}
exports.main = main;
