import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from 'projects/restoration/src/lib/session/session.component';
import { LandingComponent } from './restoration/landing/landing.component';
import { RestorationComponent } from './restoration/restoration.component';

const routes: Routes = [
  {path:"", children: [
    {path:"restoration",component: LandingComponent},
    {path:'restoration/session', component: SessionComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalsRoutingModule { }
