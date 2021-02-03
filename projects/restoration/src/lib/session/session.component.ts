import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'projects/auth/src/lib/models';
import { AuthService } from 'projects/auth/src/public-api';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestorationProject } from './models/restoration-project.model';
import { RestorationType } from './models/restoration-type.model';
import { RestorationSession } from './models/session.model';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'lib-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  form: FormGroup;
  lat: number;
  lng: number;
  zoom = 100;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 25,
    minZoom: 8,
  };

  marker: any;
  vm$: Observable<any>;
  projects$: Observable<RestorationProject[]>;
  types$: Observable<RestorationType[]>;

  constructor(
    public auth: AuthService,
    private observableService: ObservableService,
    private store: AngularFirestore,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupVm();
    this.setupMap();
    this.setupForm();
  }
  setupVm() {
    this.projects$ = this.observableService.getObservable<RestorationProject[]>(
      this.store.collection('restoration-projects')
    );
    this.types$ = this.observableService.getObservable<RestorationType[]>(
      this.store.collection('restoration-type')
    );
    this.vm$ = combineLatest([
      this.projects$,
      this.types$,
      this.auth.user$,
    ]).pipe(
      map(
        ([projects, types, user]: [
          RestorationProject[],
          RestorationType[],
          User
        ]) => ({
          projects,
          types,
          user,
        })
      )
    );
  }

  setupMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.marker = {
        position: {
          lat: this.lat,
          lng: this.lng,
        },
        label: {
          color: 'red',
          text: 'Restoration Area',
        },
        title: 'Restoration Area',
        options: { animation: google.maps.Animation.BOUNCE },
      };
    });
  }

  setupForm() {
    this.form = this.fb.group({
      project: ['', Validators.required],
      type: ['', Validators.required],
      beforeImage: ['', Validators.required],
    });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  startSession(user: User) {
    const project = this.form.get('project').value as RestorationProject;
    const type = this.form.get('type').value as RestorationType;
    const session: RestorationSession = {
      //id: this.store.createId(),
      afterPictureUrl: '',
      beforePictureUrl: this.form.get('beforeImage').value,
      // end?:
      latitude: this.lat,
      longitude: this.lng,
      projectId: project.id,
      projectDesc: project.name,
      restorationTypeId: type.id,
      restorationTypeDesc: type.name,
      start: Timestamp.now(),
      uid: user.uid,
    };
    this.store
      .collection('restoration-sessions')
      .add(session)
      .then((docRef) => {
        this.router.navigate([
          'portals',
          'restoration',
          'session',
          `${docRef.id}`,
        ]);
      });
  }
}
