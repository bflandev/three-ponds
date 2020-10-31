import { Component } from '@angular/core';
import {AuthService} from 'projects/auth/src/lib/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital';
  constructor(public auth: AuthService) {

  }
}


