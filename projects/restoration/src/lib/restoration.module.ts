import { NgModule } from '@angular/core';
import { RestorationComponent } from './restoration.component';
import { SessionComponent } from './session/session.component';



@NgModule({
  declarations: [RestorationComponent, SessionComponent],
  imports: [
  ],
  exports: [RestorationComponent]
})
export class RestorationModule { }
