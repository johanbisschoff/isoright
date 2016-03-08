import {App,Page, NavController, NavParams} from 'ionic-framework/ionic'
import {OnInit} from 'angular2/core'
import {SettingsService} from '../../services/settings.service'

@Page({
  providers: [SettingsService],
  templateUrl: 'build/pages/settings/settings.html'
})

export class SettingsPage implements OnInit {

  public baseUrl: string
  public constructor(private _settingsService: SettingsService){

  }

  public save(){
    this._settingsService.setUrl(this.baseUrl)
  }

  ngOnInit(){
    this._settingsService.getUrl().then(url => {
      this.baseUrl = url
    })
  }
}
