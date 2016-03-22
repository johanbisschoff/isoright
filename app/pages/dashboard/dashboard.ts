import {Page, NavController, NavParams, Alert, MenuController} from 'ionic-framework/ionic'

import {UtilsService} from '../../services/utils.service'
import {SettingsService} from '../../services/settings.service'
import {StandardsService} from '../../services/standards.service'
import {AuthenticationService} from '../../services/authentication.service'
import {HttpService} from '../../services/http.service'

import {Certification} from '../../models/certification'
import {OnInit} from 'angular2/core'
import {CertificationElementsPage} from '../certification-elements/certification-elements'


@Page({
  providers: [StandardsService,UtilsService,SettingsService,HttpService,AuthenticationService],
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class DashboardPage implements OnInit {
  public certifications: Certification[]
  public hasError: boolean = false
  public error: string

  constructor(
    private _nav: NavController,
    private _standardsService: StandardsService
  ) {
  }

  itemSelected(item: Certification){
    this._nav.push(CertificationElementsPage, {
      item: item
    })
  }

  getDasboardItems(){
    this._standardsService.getCertifications().then(items => {
      this.certifications = items
    },error => {
      this.hasError = true 
      this.error = error
    })
  }

  //we use this for any onload that we need to do in order to keep the
  // constructor uncluttered
  ngOnInit() {
    this.getDasboardItems()
  }
}
