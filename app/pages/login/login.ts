import {Page, NavController, NavParams, Alert} from 'ionic-framework/ionic'
import {DashboardPage} from '../dashboard/dashboard'

import {LoginService} from '../../services/login.service'
import {SettingsService} from '../../services/settings.service'
import {AuthenticationService} from '../../services/authentication.service'
import {HttpService} from '../../services/http.service'
import {UtilsService} from '../../services/utils.service'

@Page({
  providers: [
    LoginService,AuthenticationService,
    HttpService,SettingsService,UtilsService
  ],
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  public username: string
  public password: string

  public hasError: boolean = false
  public error: string


  constructor(private _nav: NavController, private _loginService: LoginService,
    private _authenticationService: AuthenticationService) {
    _authenticationService.getToken().then(token => {
      if (token != null){
        this.navNext()
      }
    })
  }

  public presentAlert() {
    let alert = Alert.create({
      title: 'Authentication Failed',
      subTitle: 'Username or Password is invalid',
      buttons: ['Ok']
    })
    this._nav.present(alert)
  }

  private navNext(){
    this._nav.setRoot(DashboardPage)
  }

  public login() {
    this._loginService.login(this.username, this.password).then(authPassed => {
      this.hasError = false
      if (authPassed) {
        this.navNext()
      } else {
        this.presentAlert()
      }
    }, error => {
      this.hasError = true
      this.error = 'Username or password is incorrect'
      console.log("login page failed")
    })
  }
}
