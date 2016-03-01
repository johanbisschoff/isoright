import {Page, NavController, NavParams} from 'ionic-framework/ionic'
import {StandardsService} from '../../services/standards.service'
import {CertificationElement, Certification} from '../../models/certification'
import {OnInit} from 'angular2/core'

@Page({
  providers: [StandardsService],
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
    console.log(`selected ${item.name}`)
    // this._nav.push()
  }

  getCertificationElements(){
    this._standardsService.getCertificationElements().then(items => {
      this.certificationElements = items
    })
  }

  ngOnInit(){
    this.getCertificationElements()
  }
}
