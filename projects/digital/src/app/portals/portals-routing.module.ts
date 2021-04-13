import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './restoration/landing/landing.component';
import { SessionComponent } from './restoration/session/session.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'restoration', component: LandingComponent },
      { path: 'restoration/session', component: SessionComponent },
      // {
      //   path: 'restoration/session/:sessionId',
      //   component: LiveSessionComponent,
      // },
      // {
      //   path: 'restoration/session/:sessionId/details',
      //   component: SessionDetailsComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalsRoutingModule {}
