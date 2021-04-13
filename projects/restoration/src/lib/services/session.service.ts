import { Injectable } from '@angular/core';
import { RestorationSession } from 'projects/digital/src/app/portals/restoration/restoration.model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  selectedSessionSubject = new BehaviorSubject<RestorationSession>(null);
  selectedSession$ = this.selectedSessionSubject.asObservable();
  constructor() {}
  selectSession(session: RestorationSession) {
    this.selectedSessionSubject.next(session);
  }
}
