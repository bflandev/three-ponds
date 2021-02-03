import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveSessionComponent } from './live-session.component';
import { CoreModule } from 'projects/digital/src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { VendorsModule } from 'projects/vendors/src/public-api';

@NgModule({
  declarations: [LiveSessionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsModule,
    CoreModule,
    GoogleMapsModule,
  ],
  exports: [LiveSessionComponent],
})
export class LiveSessionModule {}
