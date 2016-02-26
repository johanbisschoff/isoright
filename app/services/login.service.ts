import {Injectable} from 'angular2/core'

@Injectable()
export class LoginService {
  login(username: string, password: string){
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(true)
      },500)
    })
  }
}
