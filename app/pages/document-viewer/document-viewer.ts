import {App,Page, NavController, NavParams} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {CertificationElement, Certification} from '../../models/certification'
import {DocumentType} from '../../models/document-type'
import {OnInit} from 'angular2/core'

import {DashboardPage} from '../dashboard/dashboard'

@Page({
  providers: [],
  templateUrl: 'build/pages/document-viewer/document-viewer.html'
})

export class DocumentViewerPage implements OnInit {

  public document: Document
  public documentType: DocumentType
  public certification: Certification
  public certificationElement: CertificationElement
  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _menu: MenuController
  ) {

    this.certification = this._params.get('certification')
    this.certificationElement = this._params.get('certificationElement')
    this.documentType = this._params.get('documentType')
    this.document = this._params.get('document')
  }

  getDocumentList() {

  }

  openHome() {
    this._nav.setRoot(DashboardPage)
  }

  ngOnInit() {

    this.getDocumentList()
  }
}
