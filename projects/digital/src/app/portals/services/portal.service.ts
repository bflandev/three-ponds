import { Portal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  selectedPortalSubject = new BehaviorSubject<Portal<any>>(null);
  overviewPortal$ = this.selectedPortalSubject.asObservable();
  constructor() {}

  selectPortal(portal: Portal<any>) {
    this.selectedPortalSubject.next(portal);
  }
}
