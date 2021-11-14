import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactLandingComponent } from './contact-landing/contact-landing.component';

const routes: Routes = [
  {
    path: '',
    component: ContactLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
