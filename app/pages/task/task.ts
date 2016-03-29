import {App, Page, NavController, NavParams} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {OnInit} from 'angular2/core'

import {Task} from '../../models/task'

import {UtilsService} from '../../services/utils.service'
import {SettingsService} from '../../services/settings.service'
import {AuthenticationService} from '../../services/authentication.service'
import {HttpService} from '../../services/http.service'
import {TasksService} from '../../services/tasks.service'

import {CompleteTaskPage} from './completeTask/completeTask'

@Page({
  providers: [
    UtilsService, SettingsService,
    HttpService, AuthenticationService, TasksService
  ],
  templateUrl: 'build/pages/task/task.html'
})

export class TaskPage {

  public task : Task

  constructor(
    private _nav: NavController,
    private _tasksService: TasksService,
    private _params: NavParams
  ) {
      this.task = this._params.get('task')
  }

  private completeTask(){

    this._nav.present(CompleteTaskPage, {
      task: this.task
    })
  }

  update(){

    if (this.task.complete >= 1000) {

    }
  }

  complete() {
    this.task.complete = 100
    this.completeTask()
  }
}
