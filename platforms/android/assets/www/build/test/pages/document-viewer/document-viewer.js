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
var DocumentViewerPage = (function () {
    function DocumentViewerPage(_nav, _params) {
        this._nav = _nav;
        this._params = _params;
        this.certification = this._params.get('certification');
        this.certificationElement = this._params.get('certificationElement');
        this.documentType = this._params.get('documentType');
    }
    DocumentViewerPage.prototype.getDocumentList = function () {
    };
    DocumentViewerPage.prototype.ngOnInit = function () {
        this.getDocumentList();
    };
    DocumentViewerPage = __decorate([
        ionic_1.Page({
            providers: [],
            templateUrl: 'build/pages/document-viewer/document-viewer.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, ionic_1.NavParams])
    ], DocumentViewerPage);
    return DocumentViewerPage;
})();
exports.DocumentViewerPage = DocumentViewerPage;
