import {Injectable} from 'angular2/core'
import {Storage, LocalStorage} from 'ionic-framework/ionic'
import {AuthenticationService} from './authentication.service'


@Injectable()
export class LoginService {

  private _authenticationService: AuthenticationService
  constructor(){
    this._authenticationService = new AuthenticationService()
  }

  login(username: string, password: string) {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        if (username === "admin" && password == "admin"){
          resolve(true)
          this._authenticationService.setToken('1324-1324-1344')
        } else {
          resolve(false)
        }
      },500)
    })
  }
}
