import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor() {}
  getObservable<t>(collection: AngularFirestoreCollection<t>) {
    const subject = new BehaviorSubject([]);
    collection.valueChanges({ idField: 'id' }).subscribe((val: t[]) => {
      subject.next(val);
    });
    return subject;
  }

  getObservableDocument<t>(collection: AngularFirestoreDocument<t>) {
    const subject = new BehaviorSubject(null);
    collection.valueChanges().subscribe((val: t) => {
      subject.next(val);
    });
    return subject;
  }
}
