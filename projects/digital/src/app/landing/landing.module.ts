import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HeroComponent } from './hero/hero.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactModule } from '../contact/contact.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    VendorsModule,
    ContactModule,
    CoreModule
  ]
})
export class LandingModule { }
