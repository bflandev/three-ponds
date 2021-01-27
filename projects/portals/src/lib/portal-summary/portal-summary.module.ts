import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalSummaryComponent } from './portal-summary.component';
import { VendorsModule } from 'projects/vendors/src/public-api';



@NgModule({
  declarations: [PortalSummaryComponent],
  imports: [
    CommonModule,
    VendorsModule
  ], 
  exports: [
    PortalSummaryComponent,

  ]
})
export class PortalSummaryModule { }
