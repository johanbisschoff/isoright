import {TEST_BROWSER_PLATFORM_PROVIDERS,TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser'
import {setBaseTestProviders} from 'angular2/testing'
import {IonicApp,Platform} from 'ionic-framework/ionic'
import {MyApp} from '../app/app'

// this needs doing _once_ for the entire test suite, hence it's here
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

let myApp = null

export function main(){
  describe('MyApp', () => {
    beforeEach(function(){
      let platform = new Platform()
      myApp = new MyApp(platform)
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
    })

    it('initialises with two possible pages', () => {
      expect(myApp).not.toBeNull()
    })
  })
}
