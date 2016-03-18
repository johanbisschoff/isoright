import {Injectable} from 'angular2/core'
import {Storage, LocalStorage} from 'ionic-framework/ionic'

import {AuthenticationService} from './authentication.service'
import {HttpService} from './http.service'

@Injectable()
export class LoginService {

  constructor(
    private _httpService: HttpService,
    private _authenticationService: AuthenticationService
  ) {
    this._authenticationService = new AuthenticationService()
  }

  login(username: string, password: string) : Promise<boolean> {
    return new Promise<boolean>(resolve => {
      let body = {
        username,
        password
      }

      this._httpService.postJson('/api/login',JSON.stringify(body)).then(json => {
        console.log(json);
        this._authenticationService.setToken(json.token);
        resolve (true)
      })
    })
  }

  logout() {
    this._authenticationService.clearToken()
  }

}
