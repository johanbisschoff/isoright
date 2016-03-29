import {App, Page, NavController, NavParams, ViewController, Alert} from 'ionic-framework/ionic'
import {MenuController} from 'ionic-framework/ionic'
import {OnInit} from 'angular2/core'

import {Task} from '../../../models/task'

import {UtilsService} from '../../../services/utils.service'
import {SettingsService} from '../../../services/settings.service'
import {AuthenticationService} from '../../../services/authentication.service'
import {HttpService} from '../../../services/http.service'
import {TasksService} from '../../../services/tasks.service'

@Page({
  providers: [
    UtilsService, SettingsService,
    HttpService, AuthenticationService, TasksService
  ],
  templateUrl: 'build/pages/task/completeTask/completeTask.html'
})

export class CompleteTaskPage {

  public task: Task

  constructor(
    private _nav: NavController,
    private _tasksService: TasksService,
    private _params: NavParams,
    private _viewCtrl: ViewController
    ) {
    this.task = this._params.get('task')
  }

  dismiss() {
    this._viewCtrl.dismiss(this)
  }

  complete() {
    if (this.task.completionNote == '') {
      let alert = Alert.create({
        title: 'Empty completion note',
        subTitle: 'Your completion note cannot be empty',
        buttons: ['Dismiss']
      });
      this._nav.present(alert);
    } else {
      //post completion
      this.dismiss()
    }
  }


}
