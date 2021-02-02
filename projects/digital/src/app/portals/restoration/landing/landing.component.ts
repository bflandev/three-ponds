import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'projects/auth/src/public-api';
import { RestorationSession } from 'projects/restoration/src/lib/session/models/session.model';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  sessions$: Observable<RestorationSession[]>;
  vm$: Observable<any>;
  constructor(
    public auth: AuthService,
    private store: AngularFirestore,
    private observableService: ObservableService
  ) {}

  ngOnInit(): void {
    this.sessions$ = this.observableService.getObservable<RestorationSession>(
      this.store.collection('restoration-sessions')
    );
    this.vm$ = combineLatest([this.sessions$]).pipe(
      map(([sessions]: [RestorationSession[]]) => ({
        sessions,
        openSession: sessions.find((s) => s.end == null),
      }))
    );
  }
}
