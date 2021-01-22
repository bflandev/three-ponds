import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SessionComponent],
  imports: [
    CommonModule,
    VendorsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  exports: [SessionComponent]
})
export class SessionModule { }
