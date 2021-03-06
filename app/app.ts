import {App, Platform,IonicApp, NavController} from 'ionic-framework/ionic'
import {LoginPage} from './pages/login/login'

import {AuthenticationService} from './services/authentication.service'
import {LoginService} from './services/login.service'

import {TasksPage} from './pages/tasks/tasks'
import {DashboardPage} from './pages/dashboard/dashboard'
import {SettingsPage} from './pages/settings/settings'

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core'
@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: Type = LoginPage
  public isIos: boolean = false
  constructor(platform: Platform, public app: IonicApp ) {
    platform.ready().then(() => {

      // let authenticationService =  new AuthenticationService()
      // authenticationService.getToken().then(token => {
      //   this.rootPage = DashboardPage
      // })
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // cordova.plugins.Keyboard.disableScroll(true)
      // if (platform.window.StatusBar){
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
      // }

      if (platform.is('ios')) {
        this.isIos = true
      }
    });
  }

  public goToDashboard() {
    let nav = this.app.getComponent('nav')
    this.app.getComponent('main-menu').close()
    nav.setRoot(DashboardPage)
  }

  public goToTasks() {
    let nav = this.app.getComponent('nav')
    this.app.getComponent('main-menu').close()
    nav.setRoot(TasksPage)
  }

  public goToSettings(){
    let nav = this.app.getComponent('nav')
    this.app.getComponent('main-menu').close()
    nav.setRoot(SettingsPage)
  }

  public logout(){
    new LoginService(null,null).logout()
    let nav = this.app.getComponent('nav')
    nav.setRoot(LoginPage);
  }
}
