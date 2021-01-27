import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalsRoutingModule } from './portals-routing.module';
import { RestorationComponent } from './restoration/restoration.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionModule } from 'projects/restoration/src/lib/session/session.module';
import { CoreModule } from '../core/core.module';
import { LandingComponent } from './restoration/landing/landing.component';


@NgModule({
  declarations: [RestorationComponent, LandingComponent],
  imports: [
    CommonModule,
    VendorsModule,
    CoreModule,
    FormsModule,
    SessionModule,
    ReactiveFormsModule,
    PortalsRoutingModule,
  ]
})
export class PortalsModule { }
