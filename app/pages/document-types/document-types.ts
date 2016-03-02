import {Page, NavController, NavParams} from 'ionic-framework/ionic'
import {StandardsService} from '../../services/standards.service'
import {CertificationElement, Certification} from '../../models/certification'
import {DocumentType} from '../../models/document-type'
import {OnInit} from 'angular2/core'

import {DocumentViewerPage} from '../document-viewer/document-viewer'

@Page({
  providers: [StandardsService],
  templateUrl: 'build/pages/document-types/document-types.html'
})

export class DocumentTypePage implements OnInit {

  public documentTypes: DocumentType[]
  public certification: Certification
  public certificationElement: CertificationElement
  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _standardsService: StandardsService) {

    this.certification = this._params.get('certification')
    this.certificationElement = this._params.get('certificationElement')
  }

  itemSelected(item: DocumentType) {
    this._nav.push(DocumentViewerPage, {
      certificationElement: this.certificationElement,
      certification: this.certification,
      documentType: item
    })
  }

  getDocumentTypes() {
    this._standardsService.getDocumentTypes().then(documentTypes => {
      this.documentTypes = documentTypes
    })
  }

  ngOnInit() {
    this.getDocumentTypes()
  }
}
