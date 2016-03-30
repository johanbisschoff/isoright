import {App, Page, NavController, NavParams} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {OnInit} from 'angular2/core'

import {CertificationElement, Certification} from '../../models/certification'
import {DocumentType} from '../../models/document-type'
import {Document} from '../../models/document'

import {DashboardPage} from '../dashboard/dashboard'
import {DocumentViewerPage} from '../document-viewer/document-viewer'

import {UtilsService} from '../../services/utils.service'
import {SettingsService} from '../../services/settings.service'
import {StandardsService} from '../../services/standards.service'
import {AuthenticationService} from '../../services/authentication.service'
import {HttpService} from '../../services/http.service'

@Page({
  providers: [
    StandardsService, UtilsService, SettingsService,
    HttpService, AuthenticationService
  ],
  templateUrl: 'build/pages/documents/documents.html'
})

export class DocumentsPage implements OnInit {

  public documents: Document[]

  public documentType: DocumentType
  public certification: Certification
  public certificationElement: CertificationElement

  public hasError: boolean = false
  public error: string

  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _menu: MenuController,
    private _standardsService: StandardsService
    ) {
    this.certification = this._params.get('certification')
    this.certificationElement = this._params.get('certificationElement')
    this.documentType = this._params.get('documentType')
  }

  getDocumentList() {
    this._standardsService.getDocuments(this.certificationElement.id,
      this.documentType.id).then(documents => {
      this.documents = documents
    }, error => {
        this.hasError = true
        this.error = error
      })
  }

  itemSelected(item: Document) {
    this._nav.push(DocumentViewerPage, {
      certificationElement: this.certificationElement,
      certification: this.certification,
      documentType: this.documentType,
      document: item
    })
  }

  openHome() {
    this._nav.setRoot(DashboardPage)
  }

  ngOnInit() {

    this.getDocumentList()
  }
}
