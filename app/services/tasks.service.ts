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
          responsible: 'John Smith',
          daysRemaining: 21,
          notes: 'Planning for capacity',
          description: '3.3.1.1 Capacity Planning f3'
        },
        {
          dueDate: '2016-03-31',
          complete: 40,
          responsible: 'John Smith',
          daysRemaining: 4,
          notes: '',
          description: '3.3.2.1 Capacity Planning f4'
        }
      ]

      resolve(tasks)
    })
  }
}
