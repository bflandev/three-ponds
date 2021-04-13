import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { CoreModule } from '../core/core.module';
import { PortalPickerModule } from 'projects/portals/src/lib/portal-picker/portal-picker.module';
import { PortalSummaryModule } from 'projects/portals/src/lib/portal-summary/portal-summary.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    VendorsModule,
    CoreModule,
    PortalPickerModule,
    PortalSummaryModule
  ]
})
export class UserModule { }
