import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveStreamRoutingModule } from './live-stream-routing.module';
import { LiveStreamComponent } from './live-stream.component';


@NgModule({
  declarations: [
    LiveStreamComponent
  ],
  imports: [
    CommonModule,
    LiveStreamRoutingModule
  ]
})
export class LiveStreamModule { }
