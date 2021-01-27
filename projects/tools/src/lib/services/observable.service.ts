import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }
  getObservable<t>(collection: AngularFirestoreCollection<t>) {
    const subject = new BehaviorSubject([]);
    collection.valueChanges({idField: 'id'}).subscribe((val: t[]) => {
      subject.next(val);
    });
    return subject;
  };
}
