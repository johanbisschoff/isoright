import {App,Page, NavController, NavParams} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {CertificationElement, Certification} from '../../models/certification'
import {DocumentType} from '../../models/document-type'
import {OnInit} from 'angular2/core'

import {DashboardPage} from '../dashboard/dashboard'

import {SettingsService} from '../../services/settings.service'
import {UtilsService} from '../../services/utils.service'
import {Document} from '../../models/document'

@Page({
  providers: [UtilsService,SettingsService],
  templateUrl: 'build/pages/document-viewer/document-viewer.html'
})

export class DocumentViewerPage implements OnInit {

  public document: Document
  public documentType: DocumentType
  public certification: Certification
  public certificationElement: CertificationElement

  fullUrl : string = ""
  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _menu: MenuController,
    private _utils: UtilsService,
    private _settingsService: SettingsService
  ) {

    this.certification = this._params.get('certification')
    this.certificationElement = this._params.get('certificationElement')
    this.documentType = this._params.get('documentType')
    this.document = this._params.get('document')

    this._settingsService.getUrl().then(url => {
      this.fullUrl = this._utils.pathJoin([
         url,
         this.document.url
       ])
    })

  }

  openHome() {
    this._nav.setRoot(DashboardPage)
  }

  ngOnInit() {

  }
}
