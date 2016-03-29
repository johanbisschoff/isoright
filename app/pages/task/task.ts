import {App, Page, NavController, NavParams, Modal} from 'ionic-framework/ionic'
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

  public task: Task

  private _modalPage: Modal

  constructor(
    private _nav: NavController,
    private _tasksService: TasksService,
    private _params: NavParams
  ) {
      this.task = this._params.get('task')
  }

  private completeTask(){
    this._modalPage = Modal.create(CompleteTaskPage, {task: this.task})
    this._nav.present(this._modalPage)
  }

  update(){

    if (this.task.complete >= 100) {
      this.completeTask()
    }
  }

  complete() {
    this.task.complete = 100
    this.update()
  }
}
