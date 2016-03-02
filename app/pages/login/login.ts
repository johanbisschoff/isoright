import {Page, NavController, NavParams, Alert} from 'ionic-framework/ionic'
// import {TabsPage} from '../tabs/tabs'
import {DashboardPage} from '../dashboard/dashboard'
import {LoginService} from '../../services/login.service'
import {AuthenticationService} from '../../services/authentication.service'

@Page({
  providers: [LoginService,AuthenticationService],
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  public username: string
  public password: string
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
    });
    this._nav.present(alert);
  }

  private navNext(){
    // this._nav.push(DashboardPage)
    this._nav.setRoot(DashboardPage)
  }

  public login() {
    console.log('logging in')
    this._loginService.login(this.username, this.password).then(authPassed => {
      if (authPassed) {
        this.navNext()
      } else {
        this.presentAlert()
      }
    })
  }
}
