import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalsRoutingModule } from './portals-routing.module';
import { RestorationComponent } from './restoration/restoration.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionModule } from 'projects/restoration/src/lib/session/session.module';


@NgModule({
  declarations: [RestorationComponent],
  imports: [
    CommonModule,
    VendorsModule,
    FormsModule,
    SessionModule,
    ReactiveFormsModule,
    PortalsRoutingModule,
  ]
})
export class PortalsModule { }
