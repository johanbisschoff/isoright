import {Page, NavController, NavParams} from 'ionic-framework/ionic'
import {CertificationElement, Certification} from '../../models/certification'
import {DocumentTypePage} from '../document-types/document-types'
import {OnInit} from 'angular2/core'


import {UtilsService} from '../../services/utils.service'
import {SettingsService} from '../../services/settings.service'
import {StandardsService} from '../../services/standards.service'
import {HttpService} from '../../services/http.service'

@Page({
  providers: [StandardsService,UtilsService,HttpService,SettingsService],
  templateUrl: 'build/pages/certification-elements/certification-elements.html'
})

export class CertificationElementsPage implements OnInit {
  public certificationElements: CertificationElement[]
  public certification: Certification
  constructor(
    private _nav: NavController,
    private _params: NavParams,
    private _standardsService: StandardsService) {

    this.certification = this._params.get('item')
  }

  itemSelected(item: CertificationElement){
    this._nav.push(DocumentTypePage,{
      certification: this.certification,
      certificationElement: item
    })
  }

  getCertificationElements(){
    this._standardsService.getCertificationElements(this.certification.id)
    .then(items => {
      this.certificationElements = items
    })
  }

  ngOnInit(){
    this.getCertificationElements()
  }
}
