import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveStreamComponent } from './live-stream.component';

const routes: Routes = [{ path: '', component: LiveStreamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveStreamRoutingModule {}
