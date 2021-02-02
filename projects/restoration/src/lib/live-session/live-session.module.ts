import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveSessionComponent } from './live-session.component';
import { CoreModule } from 'projects/digital/src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LiveSessionComponent],
  imports: [CommonModule, CoreModule, ReactiveFormsModule],
  exports: [LiveSessionComponent],
})
export class LiveSessionModule {}
