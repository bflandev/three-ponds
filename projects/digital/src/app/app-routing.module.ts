import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'projects/auth/src/lib/auth-guard.guard';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about-routing.module').then(m => m.AboutRoutingModule)
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./application-development/application-development.module').then(
        m => m.ApplicationDevelopmentModule
      )
  },
  {
    path: 'live-stream',
    loadChildren: () =>
      import('./live-stream/live-stream-routing.module').then(
        m => m.LiveStreamRoutingModule
      )
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./media/media-routing.module').then(m => m.MediaRoutingModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
