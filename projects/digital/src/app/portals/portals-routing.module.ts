import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './restoration/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'restoration', component: LandingComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalsRoutingModule {}
