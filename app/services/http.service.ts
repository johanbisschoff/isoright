import {Injectable} from 'angular2/core'
import {Http} from "angular2/http"

import {SettingsService} from './settings.service'
import {UtilsService} from './utils.service'

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
    private _settingsService: SettingsService,
    private _utilsService: UtilsService
  ){

  }

  public getJson(path: string){
    return new Promise<any>(resolve => {

      this._settingsService.getUrl().then(url => {
        var joined = this._utilsService.pathJoin([
          url, path
        ])
        this._http.get(joined)
        .subscribe(data => {
          // console.log(data.json().certifications)
          resolve(data.json())
        })
      })
    })
  }
}
