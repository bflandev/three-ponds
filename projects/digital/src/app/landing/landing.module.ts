import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HeroComponent } from './hero/hero.component';
import { VendorsModule } from 'projects/vendors/src/public-api';


@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    VendorsModule
  ]
})
export class LandingModule { }
