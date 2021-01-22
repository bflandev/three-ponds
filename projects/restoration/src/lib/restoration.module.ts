import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { RestorationComponent } from './restoration.component';
import { SessionComponent } from './session/session.component';



@NgModule({
  declarations: [RestorationComponent, SessionComponent],
  imports: [
    CommonModule,
    VendorsModule
  ],
  exports: [RestorationComponent]
})
export class RestorationModule { }
