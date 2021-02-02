import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'projects/digital/src/app/core/core.module';

@NgModule({
  declarations: [SessionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsModule,
    CoreModule,
    GoogleMapsModule,
  ],
  exports: [SessionComponent],
})
export class SessionModule {}
