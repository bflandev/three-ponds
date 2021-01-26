import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    VendorsModule,
    CoreModule
  ]
})
export class UserModule { }
