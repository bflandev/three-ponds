import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }
  @Input() task: Task;
  @Output() edit = new EventEmitter();
  ngOnInit(): void {
  }

}
