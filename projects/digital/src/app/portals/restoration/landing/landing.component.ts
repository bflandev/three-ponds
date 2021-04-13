import { Portal, TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'projects/auth/src/public-api';
import { SessionService } from 'projects/restoration/src/lib/services/session.service';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortalService } from '../../services/portal.service';
import { RestorationSession } from '../restoration.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  sessions$: Observable<RestorationSession[]>;
  vm$: Observable<any>;
  selectedSession: RestorationSession;
  newSession: boolean = false;
  selectedPortal: Portal<any>;
  @ViewChild('startSession')
  startSession: TemplateRef<unknown>;
  @ViewChild('liveSession')
  liveSession: TemplateRef<unknown>;
  @ViewChild('sessionDetails')
  sessionDetails: TemplateRef<unknown>;
  @ViewChild('dashboard')
  dashboard: TemplateRef<unknown>;
  startSessionPortal: TemplatePortal<any>;
  liveSessionPortal: TemplatePortal<any>;
  detailsPortal: TemplatePortal<any>;
  dashboardPortal: TemplatePortal<any>;
  constructor(
    public auth: AuthService,
    public portalService: PortalService,
    public sessionService: SessionService,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    this.startSessionPortal = new TemplatePortal(
      this.startSession,
      this._viewContainerRef
    );
    this.liveSessionPortal = new TemplatePortal(
      this.liveSession,
      this._viewContainerRef
    );
    this.detailsPortal = new TemplatePortal(
      this.sessionDetails,
      this._viewContainerRef
    );

    this.dashboardPortal = new TemplatePortal(
      this.dashboard,
      this._viewContainerRef
    );
    this.portalService.selectPortal(this.dashboardPortal);
  }

  ngOnInit(): void {
    this.vm$ = combineLatest([
      this.sessionService.allSessions$,
      this.portalService.selectedPortal$,
    ]).pipe(
      map(
        ([sessions, selectedPortal]: [RestorationSession[], Portal<any>]) => ({
          sessions,
          selectedPortal,
          openSession: sessions.find((s) => s.end == null),
          showHistory: sessions && sessions.length > 0,
          noSessions: sessions.length === 0,
        })
      )
    );
  }
  switchPortal(event) {
    if (event === 'details') {
      this.portalService.selectPortal(this.detailsPortal);
    } else if (event === 'live') {
      this.portalService.selectPortal(this.liveSessionPortal);
    }
  }
  selectSession(portal, session) {
    this.portalService.selectPortal(portal);
    this.sessionService.selectSession(session);
  }
}
