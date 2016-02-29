import {Page, NavController, NavParams, Alert} from 'ionic-framework/ionic'
import {TabsPage} from '../tabs/tabs'
import {LoginService} from '../../services/login.service'

@Page({
  providers: [LoginService],
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  public username: string
  public password: string
  constructor(private _nav: NavController, private _loginService: LoginService) {

  }

  public presentAlert() {
    let alert = Alert.create({
      title: 'Authentication Failed',
      subTitle: 'Username or Password is invalid',
      buttons: ['Ok']
    });
    this._nav.present(alert);
  }

  public login() {
    console.log('logging in')
    this._loginService.login(this.username, this.password).then(authPassed => {
      if (authPassed) {
        this._nav.push(TabsPage)
      } else {
        this.presentAlert()
      }
    })
  }
}
