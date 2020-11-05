import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogData, TaskDialogResult } from '../task-dialog/task-dialog.component';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  todo: Task[] = [
    {title: 'Remove Ivy From Barn Path', description: 'Remove the ivy and put in pile near the back deck.'},
    {title: 'Clear grapevine from canal', description: 'Cut down the grapevine exposing the wall and clear out ivy.'}
  ];
  inProgress: Task[] = [];
  done: Task[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  edit(list: string, task: Task): void {

  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: {
        task: {}
      }
    });
    dialogRef.afterClosed()
    .subscribe((result: TaskDialogResult) => this.todo.push(result.task));
  }

}
