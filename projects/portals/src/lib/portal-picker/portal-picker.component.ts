import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'projects/auth/src/lib/models';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Portal, UserPortal } from '../portal.model';

@Component({
  selector: 'lib-portal-picker',
  templateUrl: './portal-picker.component.html',
  styleUrls: ['./portal-picker.component.scss']
})
export class PortalPickerComponent implements OnInit {
  @Input() user: User;
  portals: Observable<Portal[]>;
  constructor(private store: AngularFirestore, private observableService: ObservableService) { }

  ngOnInit(): void {
    this.portals = this.observableService.getObservable<Portal>(this.store.collection('portals'));
  }

}
