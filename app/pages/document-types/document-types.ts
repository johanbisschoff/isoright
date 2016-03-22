import {Page, NavController, NavParams} from 'ionic-framework/ionic'
import {CertificationElement, Certification} from '../../models/certification'
import {DocumentType} from '../../models/document-type'
import {OnInit} from 'angular2/core'
import {DashboardPage} from '../dashboard/dashboard'

import {DocumentsPage} from '../documents/documents'

import {UtilsService} from '../../services/utils.service'
import {SettingsService} from '../../services/settings.service'
import {StandardsService} from '../../services/standards.service'
import {AuthenticationService} from '../../services/authentication.service'
import {HttpService} from '../../services/http.service'

@Page({
  providers: [StandardsService,UtilsService,SettingsService,HttpService,AuthenticationService],
  templateUrl: 'build/pages/document-types/document-types.html'
})

export class DocumentTypePage implements OnInit {

  public documentTypes: DocumentType[]
  public certification: Certification
  public certificationElement: CertificationElement

  public hasError: boolean = false
  public error: string

  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _standardsService: StandardsService) {

    this.certification = this._params.get('certification')
    this.certificationElement = this._params.get('certificationElement')
  }

  itemSelected(item: DocumentType) {
    this._nav.push(DocumentsPage, {
      certificationElement: this.certificationElement,
      certification: this.certification,
      documentType: item
    })
  }

  openHome() {
    this._nav.setRoot(DashboardPage)
  }

  getDocumentTypes() {
    this._standardsService.getDocumentTypes().then(documentTypes => {
      this.documentTypes = documentTypes
    },error => {
      this.hasError = true
      this.error = error
    })
  }

  ngOnInit() {
    this.getDocumentTypes()
  }
}
