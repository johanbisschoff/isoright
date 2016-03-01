import {Injectable} from 'angular2/core'
import {DashItem} from '../models/dash-item'


@Injectable()
export class StandardsService {

  private _dashItems: DashItem[] = [
    { name: "9001:2005" },
    { name: "9001:2008" },
    { name: "14001:2008" }
  ]

  constructor() {

  }

  getIsoDashList(){
    return new Promise<DashItem[]>(resolve => {
      setTimeout(()=>{
        resolve(this._dashItems)
      }, 500)
    })
  }
}
