import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsModule } from 'projects/vendors/src/public-api';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    VendorsModule
  ]
})
export class UserModule { }
