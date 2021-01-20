import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'projects/auth/src/lib/auth-guard.guard';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{path:'', component: DashboardComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes), VendorsModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
