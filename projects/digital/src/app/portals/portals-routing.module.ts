import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveSessionComponent } from 'projects/restoration/src/lib/live-session/live-session.component';
import { SessionComponent } from 'projects/restoration/src/lib/session/session.component';
import { LandingComponent } from './restoration/landing/landing.component';
import { RestorationComponent } from './restoration/restoration.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'restoration', component: LandingComponent },
      { path: 'restoration/session', component: SessionComponent },
      {
        path: 'restoration/session/:sessionId',
        component: LiveSessionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalsRoutingModule {}
