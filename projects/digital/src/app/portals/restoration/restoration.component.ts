import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';

@Component({
  selector: 'app-restoration',
  templateUrl: './restoration.component.html',
  styleUrls: ['./restoration.component.scss']
})
export class RestorationComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
