import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from 'projects/restoration/src/lib/session/session.component';
import { RestorationComponent } from './restoration/restoration.component';

const routes: Routes = [{path:"", children: [{path:"Restoration",component: RestorationComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalsRoutingModule { }
