import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'projects/auth/src/public-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  constructor(public auth: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForms();
  }

  setupForms() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLoginSubmit(form: any) {
    this.auth.emailSignIn(form.email, form.password);
  }
  onSignupSubmit(form: any) {
    this.auth.signUp(form.email, form.password, form.name);
  }
}
