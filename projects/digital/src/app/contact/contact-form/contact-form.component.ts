import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ContactRequest } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  siteKey = '6Lc3ISUaAAAAAJNcwQ-v-hEiKW-kCJqZjFpnA-ck';

  useGlobalDomain=false;
  size = 'Normal';
  lang = 'En';
  theme = "Light"
  type = 'Image';
  constructor(private fb: FormBuilder, private store: AngularFirestore, private reCaptchaV3Service: ReCaptchaV3Service) {
    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      console.log('This is your token: ', token);
    }, {
        useGlobalDomain: false
    });
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    })
  }
  handleReset(){}
  handleExpire(){}
  handleError(){}
  handleLoad(){}
  handleSuccess($event){}
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get email(){
    return this.contactForm.get('email');
  }

  get name() {
    return this.contactForm.get('name');
  }

  onSubmit(contact: ContactRequest) {
    this.submitted = true;
    this.store.collection('leads').add(contact)
  }
}
