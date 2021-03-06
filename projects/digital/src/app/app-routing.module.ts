import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from 'projects/auth/src/lib/auth-guard.guard';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  
    {path:'', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
    {path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path: 'portals', loadChildren: () => import('./portals/portals.module').then(m => m.PortalsModule)}
    // {path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
