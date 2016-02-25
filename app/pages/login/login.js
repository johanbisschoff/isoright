import {Page,NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
   constructor(nav: NavController){
     this.nav = nav;
   }

   navigationBypass(){
     this.nav.push(TabsPage);
    //  this.rootPage = TabsPage;
   }
}
