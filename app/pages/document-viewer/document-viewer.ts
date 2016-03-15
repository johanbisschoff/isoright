import {App,Page, NavController, NavParams} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {CertificationElement, Certification} from '../../models/certification'
import {DocumentType} from '../../models/document-type'
import {OnInit} from 'angular2/core'

import {DashboardPage} from '../dashboard/dashboard'

import {SettingsService} from '../../services/settings.service'
import {UtilsService} from '../../services/utils.service'
import {Document} from '../../models/document'

import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
  providers: [UtilsService,SettingsService,HTTP_PROVIDERS],
  templateUrl: 'build/pages/document-viewer/document-viewer.html'
})

export class DocumentViewerPage implements OnInit {

  public document: Document
  public documentType: DocumentType
  public certification: Certification
  public certificationElement: CertificationElement

  private _fullUrl : string = ""
  public documentHtml : string = "<a>doc</a>"

  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _menu: MenuController,
    private _utils: UtilsService,
    private _settingsService: SettingsService,
    private _http: Http
  ) {

    this.certification = this._params.get('certification')
    this.certificationElement = this._params.get('certificationElement')
    this.documentType = this._params.get('documentType')
    this.document = this._params.get('document')

      this._fullUrl = this._utils.pathJoin([
         '/documents/',
         this.document.url
       ])

  }

  openHome() {
    this._nav.setRoot(DashboardPage)
  }

  ngOnInit() {
    this._http.get(this._fullUrl)
        .subscribe(text => {
          let htmlText = text.text()
          console.log(htmlText)
          this.documentHtml = htmlText
        })
  }
}
