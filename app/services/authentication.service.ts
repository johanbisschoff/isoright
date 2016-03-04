import {Injectable} from 'angular2/core'
import {Storage, LocalStorage} from 'ionic-framework/ionic'


@Injectable()
export class AuthenticationService {
    private TOKEN_KEY: string = "TOKEN"

    private _local : Storage
    constructor(){
      this._local = new Storage(LocalStorage)
    }

    public setToken(token: string) {
      this._local.set(this.TOKEN_KEY, token)
    }

    public getToken(): Promise<string> {
      return this._local.get(this.TOKEN_KEY)
    }

    public clearToken(){
      this._local.remove(this.TOKEN_KEY);
    }
}
