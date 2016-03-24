import {Injectable} from 'angular2/core'
import {Storage, LocalStorage} from 'ionic-framework/ionic'

@Injectable()
export class SettingsService {

    private URL_KEY: string = "URL"
    private _local: Storage

    public constructor(){
      this._local = new Storage(LocalStorage)

      this.getUrl().then(storedUrl => {
        if (!storedUrl){
            this.setUrl("/api/")
            //this.setUrl("http://192.168.4.63/MobileAPI")
            // this.setUrl("http://www.isoright.com/api")
        }
      })
    }

    public getUrl(): Promise<string> {
      return this._local.get(this.URL_KEY)
    }

    public setUrl(url: string){
      this._local.set(this.URL_KEY,url )
    }
}
