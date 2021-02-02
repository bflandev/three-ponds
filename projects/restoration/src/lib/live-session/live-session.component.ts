import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { Observable } from 'rxjs';
import { RestorationSession } from '../session/models/session.model';

@Component({
  selector: 'lib-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.scss'],
})
export class LiveSessionComponent implements OnInit {
  session$: Observable<RestorationSession>;
  constructor(
    private store: AngularFirestore,
    private route: ActivatedRoute,
    private observableService: ObservableService
  ) {}
  ngOnInit(): void {
    const sessionId = this.route.snapshot.params['sessionId'];
    this.session$ = this.observableService.getObservableDocument<RestorationSession>(
      this.store.collection('restoration-sessions').doc(sessionId)
    );
  }
}
