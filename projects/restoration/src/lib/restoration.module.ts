import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { RestorationComponent } from './restoration.component';

@NgModule({
  declarations: [RestorationComponent],
  imports: [CommonModule, VendorsModule],
  exports: [RestorationComponent],
})
export class RestorationModule {}
