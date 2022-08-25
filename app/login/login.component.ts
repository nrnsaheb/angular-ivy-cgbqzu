import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginSection: any;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private fb: FormBuilder,
    private readonly router: Router
  ) {}
  loadform() {
    this.loginSection = this.fb.group({
      email: '',
      password: '',
    });
  }
  ngOnInit() {
    // this.SignIn('nooruddin.saheb.ns@gmail.com', 'Test12345');
    this.loadform();
  }
  SignIn() {
    console.log(this.loginSection.value.email);
    this.angularFireAuth
      .signInWithEmailAndPassword(
        this.loginSection.value.email,
        this.loginSection.value.password
      )
      .then((res: any) => {
        console.log(res.user.refreshToken);
        localStorage.setItem('token', res.user.refreshToken);
        this.router.navigate(['/products']);
        // console.log('You're in!');
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }
}
