import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDevelopmentComponent } from './application-development.component';

const routes: Routes = [
  { path: '', component: ApplicationDevelopmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationDevelopmentRoutingModule {}
