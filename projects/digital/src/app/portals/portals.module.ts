import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalsRoutingModule } from './portals-routing.module';
import { RestorationComponent } from './restoration/restoration.component';


@NgModule({
  declarations: [RestorationComponent],
  imports: [
    CommonModule,
    PortalsRoutingModule,
  ]
})
export class PortalsModule { }
