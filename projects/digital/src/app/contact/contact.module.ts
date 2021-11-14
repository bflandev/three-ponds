import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ContactLandingComponent } from './contact-landing/contact-landing.component';


@NgModule({
  declarations: [ContactFormComponent, ContactLandingComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    VendorsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactModule { }
