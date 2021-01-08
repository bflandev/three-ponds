import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    VendorsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactModule { }
