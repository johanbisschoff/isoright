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
var document_viewer_1 = require('../document-viewer/document-viewer');
var DocumentTypePage = (function () {
    function DocumentTypePage(_nav, _params, _standardsService) {
        this._nav = _nav;
        this._params = _params;
        this._standardsService = _standardsService;
        this.certification = this._params.get('certification');
        this.certificationElement = this._params.get('certificationElement');
    }
    DocumentTypePage.prototype.itemSelected = function (item) {
        this._nav.push(document_viewer_1.DocumentViewerPage, {
            certificationElement: this.certificationElement,
            certification: this.certification,
            documentType: item
        });
    };
    DocumentTypePage.prototype.getDocumentTypes = function () {
        var _this = this;
        this._standardsService.getDocumentTypes().then(function (documentTypes) {
            _this.documentTypes = documentTypes;
        });
    };
    DocumentTypePage.prototype.ngOnInit = function () {
        this.getDocumentTypes();
    };
    DocumentTypePage = __decorate([
        ionic_1.Page({
            providers: [standards_service_1.StandardsService],
            templateUrl: 'build/pages/document-types/document-types.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, ionic_1.NavParams, standards_service_1.StandardsService])
    ], DocumentTypePage);
    return DocumentTypePage;
})();
exports.DocumentTypePage = DocumentTypePage;
