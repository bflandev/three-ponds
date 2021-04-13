import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'projects/auth/src/public-api';
import { RestorationSession } from 'projects/digital/src/app/portals/restoration/restoration.model';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  selectedSessionSubject = new BehaviorSubject<RestorationSession>(null);
  selectedSession$ = this.selectedSessionSubject.asObservable();
  allSessionsSubject: BehaviorSubject<RestorationSession[]>;
  allSessions$: Observable<RestorationSession[]>;

  constructor(
    private store: AngularFirestore,
    private observableService: ObservableService,
    private auth: AuthService
  ) {
    this.auth.user$.subscribe((u) => {
      if (u) {
        this.allSessionsSubject = this.observableService.getObservable<RestorationSession>(
          this.store.collection<RestorationSession>(
            'restoration-sessions',
            (ref) => ref.where('uid', '==', u.uid)
          )
        );
      } else {
        this.allSessionsSubject = new BehaviorSubject<RestorationSession[]>(
          null
        );
      }
      this.allSessions$ = this.allSessionsSubject.asObservable();
    });
  }
  selectSession(session: RestorationSession) {
    this.selectedSessionSubject.next(session);
  }
}
