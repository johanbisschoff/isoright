import {Page,NavController,NavParams} from 'ionic-framework/ionic'
import {TabsPage} from '../tabs/tabs'
import {LoginService} from '../../services/login.service'

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage{

  constructor(private nav: NavController) {
    
  }

  bypassLogin(){
    this.nav.push(TabsPage)
  }
}
