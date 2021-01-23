import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'projects/auth/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { RestorationSession } from './models/session.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'lib-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  lat: number;
  lng: number;
  zoom = 20
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 25,
    minZoom: 8,
  }

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

 marker: any;

  constructor(public auth: AuthService, private store: AngularFirestore) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition( position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
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
      }
    })
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

}
