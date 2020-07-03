import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
