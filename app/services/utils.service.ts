import {Injectable} from 'angular2/core'
import {Storage, LocalStorage} from 'ionic-framework/ionic'

@Injectable()
export class UtilsService {

  public pathJoin(parts){
     var separator = '/'
     var replace   = new RegExp(separator+'{1,}', 'g')
     return parts.join(separator).replace(replace, separator)
  }
}
