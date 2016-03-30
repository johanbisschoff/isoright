import {App, Page, NavController, NavParams} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {OnInit} from 'angular2/core'

import {Task} from '../../models/task'

import {UtilsService} from '../../services/utils.service'
import {SettingsService} from '../../services/settings.service'
import {AuthenticationService} from '../../services/authentication.service'
import {HttpService} from '../../services/http.service'
import {TasksService} from '../../services/tasks.service'

import {TaskPage} from '../task/task'

@Page({
  providers: [
    UtilsService, SettingsService,
    HttpService, AuthenticationService, TasksService
  ],
  templateUrl: 'build/pages/tasks/tasks.html'
})


export class TasksPage implements OnInit {

  public tasks : Task[]

  constructor(
    private _nav: NavController,
    private _tasksService: TasksService
  ) {

  }

  getTaskList(){
    this._tasksService.getTasks().then(tasks => {
      this.tasks = tasks
    })
  }

  itemSelected(item: Task){
    this._nav.push(TaskPage, {
      task: item
    })
  }

  ngOnInit() {
    this.getTaskList()
  }
}
