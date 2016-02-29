import { LoginPage } from './login';

let loginPage: LoginPage = null;

export function main(): void {
  'use strict';

  describe('Login', () => {

    beforeEach(() => {
      loginPage = new LoginPage(null, null);
      spyOn(loginPage, 'presentAlert')
      spyOn(loginPage,'login')
    });

    it('should call login when calling login', () => {
      loginPage.login()
      expect(loginPage.login).toHaveBeenCalled()
    })
  });
}
