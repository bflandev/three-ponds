import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartSessionComponent } from './start-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'projects/digital/src/app/core/core.module';
import { VendorsModule } from 'projects/vendors/src/public-api';

@NgModule({
  declarations: [StartSessionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsModule,
    GoogleMapsModule,
    RouterModule,
  ],
  exports: [StartSessionComponent],
})
export class StartSessionModule {}
