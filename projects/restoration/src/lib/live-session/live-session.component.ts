import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RestorationSession } from '../session/models/session.model';

@Component({
  selector: 'lib-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.scss'],
})
export class LiveSessionComponent implements OnInit {
  constructor(
    private store: AngularFirestore,
    private route: ActivatedRoute,
    private observableService: ObservableService
  ) {}
  session$: Observable<RestorationSession>;
  ngOnInit(): void {
    // this.session$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     this.selectedId = Number(params.get('id'));
    //     return this.service.getHeroes();
    //   })
    // );
  }
}
