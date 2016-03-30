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
var document_types_1 = require('../document-types/document-types');
var CertificationElementsPage = (function () {
    function CertificationElementsPage(_nav, _params, _standardsService) {
        this._nav = _nav;
        this._params = _params;
        this._standardsService = _standardsService;
        this.certification = this._params.get('item');
    }
    CertificationElementsPage.prototype.itemSelected = function (item) {
        this._nav.push(document_types_1.DocumentTypePage, {
            certification: this.certification,
            certificationElement: item
        });
    };
    CertificationElementsPage.prototype.getCertificationElements = function () {
        var _this = this;
        this._standardsService.getCertificationElements().then(function (items) {
            _this.certificationElements = items;
        });
    };
    CertificationElementsPage.prototype.ngOnInit = function () {
        this.getCertificationElements();
    };
    CertificationElementsPage = __decorate([
        ionic_1.Page({
            providers: [standards_service_1.StandardsService],
            templateUrl: 'build/pages/certification-elements/certification-elements.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, ionic_1.NavParams, standards_service_1.StandardsService])
    ], CertificationElementsPage);
    return CertificationElementsPage;
})();
exports.CertificationElementsPage = CertificationElementsPage;
