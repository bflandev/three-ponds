import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalsRoutingModule } from './portals-routing.module';
import { RestorationComponent } from './restoration/restoration.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LandingComponent } from './restoration/landing/landing.component';
import { LiveSessionModule } from 'projects/restoration/src/lib/live-session/live-session.module';
import { SessionDetailsModule } from 'projects/restoration/src/lib/session-details/session-details.module';
import { SessionComponent } from './restoration/session/session.component';
import { StartSessionModule } from 'projects/restoration/src/lib/start-session/start-session.module';

@NgModule({
  declarations: [RestorationComponent, LandingComponent, SessionComponent],
  imports: [
    CommonModule,
    VendorsModule,
    CoreModule,
    FormsModule,
    SessionDetailsModule,
    LiveSessionModule,
    StartSessionModule,
    ReactiveFormsModule,
    PortalsRoutingModule,
  ],
})
export class PortalsModule {}
