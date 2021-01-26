import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VendorsModule } from 'projects/vendors/src/public-api';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    VendorsModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule { }
