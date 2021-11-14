import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationDevelopmentRoutingModule } from './application-development-routing.module';
import { ApplicationDevelopmentComponent } from './application-development.component';


@NgModule({
  declarations: [
    ApplicationDevelopmentComponent
  ],
  imports: [
    CommonModule,
    ApplicationDevelopmentRoutingModule
  ]
})
export class ApplicationDevelopmentModule { }
