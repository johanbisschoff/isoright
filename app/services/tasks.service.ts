import {Injectable} from 'angular2/core'

import {SettingsService} from './settings.service'
import {UtilsService} from './utils.service'
import {HttpService} from './http.service'

import {Task} from '../models/task'
import {Http} from "angular2/http"

@Injectable()
export class TasksService {
  public constructor(
    private _http: Http,
    private _utilsService: UtilsService,
    private _settingsService: SettingsService
  ) {

  }

  public getTasks() : Promise<Task[]>{
    return new Promise<Task[]>((resolve,reject) => {
      let tasks = [
        {
          dueDate: '2016-03-31',
          complete: 50,
          daysRemaining: 21,
          description: 'this is a thing you need to do'
        },
        {
          dueDate: '2016-03-31',
          complete: 40,
          daysRemaining: 4,
          description: 'this is another thing you need to do'
        }
      ]

      resolve(tasks)
    })
  }
}
