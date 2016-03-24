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
var standards_service_1 = require('../../services/standards.service');
var certification_elements_1 = require('../certification-elements/certification-elements');
var DashboardPage = (function () {
    function DashboardPage(_nav, _standardsService) {
        this._nav = _nav;
        this._standardsService = _standardsService;
    }
    DashboardPage.prototype.itemSelected = function (item) {
        console.log("selected " + item.name);
        this._nav.push(certification_elements_1.CertificationElementsPage, {
            item: item
        });
    };
    DashboardPage.prototype.getDasboardItems = function () {
        var _this = this;
        this._standardsService.getCertifications().then(function (items) {
            _this.certifications = items;
        });
    };
    //we use this for any onload that we need to do in order to keep the
    // constructor uncluttered
    DashboardPage.prototype.ngOnInit = function () {
        this.getDasboardItems();
    };
    DashboardPage = __decorate([
        ionic_1.Page({
            providers: [standards_service_1.StandardsService],
            templateUrl: 'build/pages/dashboard/dashboard.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, standards_service_1.StandardsService])
    ], DashboardPage);
    return DashboardPage;
})();
exports.DashboardPage = DashboardPage;
