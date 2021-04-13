import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './models';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  errorSubject = new BehaviorSubject<string>(null);
  errors$ = this.errorSubject.asObservable();
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithRedirect(provider);
    // this.updateUserData(credential.user);
    await this.router.navigate(['/user']);
  }

  async emailSignIn(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.errorSubject.next('Login not Valid');
    }
  }

  async signUp(email: string, password: string, userName: string) {
    try {
      return await this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((credential) => {
          let user = credential.user;
          this.updateUserData({ ...user, displayName: userName });
        });
    } catch (error) {
      this.errorSubject.next('No Good Signup');
    }
  }

  async signOut() {
    this.afAuth.signOut();
    await this.router.navigate(['/']);
  }
  async updateUserData({ uid, email, displayName, photoURL }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    return userRef.set(data);
  }
}
