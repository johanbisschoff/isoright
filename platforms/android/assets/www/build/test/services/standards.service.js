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
var certification_elements_1 = require('../data/certification-elements');
var document_types_1 = require('../data/document-types');
var StandardsService = (function () {
    function StandardsService() {
        this._certifications = [
            { "id": 1, "name": "No Certification" },
            { "id": 2, "name": "ISO9001:2008" },
            { "id": 3, "name": "TS16949:2009" },
            { "id": 4, "name": "ISO 14001:2004 " },
            { "id": 6, "name": "OHSAS BS 18001: 2007 " }
        ];
    }
    StandardsService.prototype.getCertificationElements = function () {
        return new Promise(function (resolve) {
            resolve(certification_elements_1.certificationElements);
        });
    };
    StandardsService.prototype.getCertifications = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this._certifications);
        });
    };
    StandardsService.prototype.getDocumentTypes = function () {
        return new Promise(function (resolve) {
            resolve(document_types_1.documentTypes);
        });
    };
    StandardsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StandardsService);
    return StandardsService;
})();
exports.StandardsService = StandardsService;
