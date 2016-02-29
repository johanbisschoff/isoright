import { LoginService } from './login.service'
import { AuthenticationService } from './authentication.service'

let loginService: LoginService = null

export function main(): void {
  'use strict';

  describe('Login', () => {

    let authenticationService = new AuthenticationService()
    describe('login(username,password)', () => {
      beforeEach(() => {
        loginService = new LoginService();
        loginService.logout()
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
      });

      it('should call login when calling login', () => {
        spyOn(loginService, 'login')
        loginService.login('user', 'pass')
        expect(loginService.login).toHaveBeenCalledWith('user', 'pass')
      })

      it('should return false if not using correct password', done => {
        loginService.login('user', 'pass').then(authPassed => {
          expect(authPassed).toBe(false)
          done()
        })
      })

      it('should return true auth if correct password is used', done => {
        loginService.login('admin', 'admin').then(authPassed => {
          expect(authPassed).toBe(true)
          done()
        })
      })

      it('should have a token after a valid login', done => {
        loginService.login('admin', 'admin').then(authPassed => {
          authenticationService.getToken().then(token => {
            expect(token).not.toBeNull()
            done()
          });
        })
      })

      it ('should have a null token after an invalid login', done => {
        loginService.login('user','pass').then(authPassed => {
          authenticationService.getToken().then(token => {
            expect(token).toBeNull()
          })
        })
      })
    })

    describe('logout()', () => {
      beforeEach(() => {
        loginService = new LoginService()
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
      })

      it('should call logout when calling logout', () => {
        spyOn(loginService, 'logout');
        loginService.logout()
        expect(loginService.logout).toHaveBeenCalled()
      })

      it('should have nothing in the token once logout is called', done => {
        loginService.logout()
        authenticationService.getToken().then(token => {
          expect(token).toBeNull()
          done()
        })
      })
    })

  });
}
