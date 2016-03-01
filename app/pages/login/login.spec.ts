import { LoginPage } from './login'
import { AuthenticationService } from '../../services/authentication.service'

let loginPage: LoginPage = null

export function main(): void {
  'use strict'

  let authenticationService =  new AuthenticationService()

  describe('LoginPage', () => {

    beforeEach(() => {
      loginPage = new LoginPage(null, null, authenticationService);
    });

    it('should call login when calling login', () => {
      spyOn(loginPage,'login')
      loginPage.login()
      expect(loginPage.login).toHaveBeenCalled()
    })
  });
}
