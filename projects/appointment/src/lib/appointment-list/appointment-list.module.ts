import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { VendorsModule } from 'projects/vendors/src/public-api';



@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    VendorsModule
  ],
  exports: [
    AppointmentListComponent
  ]
})
export class AppointmentListModule { }
