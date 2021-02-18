import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveSessionComponent } from 'projects/restoration/src/lib/live-session/live-session.component';
import { SessionDetailsComponent } from 'projects/restoration/src/lib/session-details/session-details.component';
//import { SessionComponent } from 'projects/restoration/src/lib/session/session.component';
import { LandingComponent } from './restoration/landing/landing.component';
import { RestorationComponent } from './restoration/restoration.component';
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
