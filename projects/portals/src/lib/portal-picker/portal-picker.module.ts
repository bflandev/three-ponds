import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalPickerComponent } from './portal-picker.component';
import { VendorsModule } from 'projects/vendors/src/public-api';



@NgModule({
  declarations: [PortalPickerComponent],
  imports: [
    CommonModule,
    VendorsModule
  ],
  exports: [
    PortalPickerComponent
  ]
})
export class PortalPickerModule { }
