import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'projects/auth/src/lib/models';
import { AuthService } from 'projects/auth/src/public-api';
import { Portal, UserPortal } from 'projects/portals/src/lib/portal.model';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userPortals$: Observable<UserPortal[]>;
  portals$: Observable<Portal[]>;
  subscriptions: Subscription[] =[];
  constructor(public auth: AuthService, private store: AngularFirestore, private observableService: ObservableService) { }

  ngOnInit(): void {
    const userPortalsSub = this.auth.user$.subscribe(u => {
      this.userPortals$ =  this.userPortals$ = this.observableService.getObservable<UserPortal>(this.store.collection('user-portals', ref => ref.where('userId', '==', u.uid)))
    })
    this.subscriptions.push(userPortalsSub);
    this.portals$ = this.observableService.getObservable<Portal>(this.store.collection('portals'));
    // const portalsSub = this.userPortals$.subscribe(up => {
    //   //this.portals$ = this.observableService.getObservable<Portal>(this.store.collection('user-portals', ref => ref.where('userId', '==', up.find())))
    // })
   
  }

  ngOnDestroy():void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }

}
