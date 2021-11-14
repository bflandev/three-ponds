import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/lib/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  title = 'digital';
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  ngOnInit(): void {
    // this.subscription = this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.router.navigate(['/user']);
    //   } else {
    //     this.router.navigate(['/']);
    //   }
    // });
  }
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
