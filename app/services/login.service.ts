import {Injectable} from 'angular2/core'

@Injectable()
export class LoginService {
  login(username: string, password: string){
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        if (username === "admin" && password == "admin"){
          resolve(true)
        } else {
          resolve(false)
        }
      },500)
    })
  }
}
