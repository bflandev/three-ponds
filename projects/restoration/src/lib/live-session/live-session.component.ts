import { Component, Input, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { User } from 'projects/auth/src/lib/models';
import { AuthService } from 'projects/auth/src/public-api';
import { ObservableService } from 'projects/tools/src/lib/services/observable.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import { RestorationSession } from '../models/session.model';

@Component({
  selector: 'lib-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.scss'],
})
export class LiveSessionComponent implements OnInit {
  @Input() session: RestorationSession;
  form: FormGroup;
  session$: Observable<RestorationSession>;
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
  constructor(
    private store: AngularFirestore,
    private route: ActivatedRoute,
    private observableService: ObservableService,
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.setupMap();
    this.setupForm();
  }

  setupMap() {
    this.center = {
      lat: this.session.latitude,
      lng: this.session.longitude,
    };
    this.marker = {
      position: {
        lat: this.session.latitude,
        lng: this.session.longitude,
      },
    };
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    //   this.marker = {
    //     position: {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     },
    //     options: { animation: google.maps.Animation.BOUNCE },
    //   };
    // });
  }

  setupForm() {
    this.form = this.fb.group({
      afterImage: ['', Validators.required],
    });
  }

  finishSession() {
    const sessionId = this.route.snapshot.params['sessionId'];
    const docRef = this.store.collection('restoration-sessions').doc(sessionId);

    docRef.update({
      afterPictureUrl: this.form.get('afterImage').value,
      end: Timestamp.now(),
    });
    //this.router.navigate(['/portals', 'restoration']);
  }
}
