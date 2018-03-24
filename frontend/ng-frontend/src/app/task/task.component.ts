import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  providers: [ TaskService ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private service;
  private task;

  constructor(service) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getTask(69).then((t) => {
      this.task = t;
    })
  }

}
