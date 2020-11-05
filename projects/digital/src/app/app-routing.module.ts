import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from 'projects/auth/src/lib/auth-guard.guard';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [{path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
