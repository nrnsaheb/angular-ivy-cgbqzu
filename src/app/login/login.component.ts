import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginSection: FormGroup;
  constructor(
    // private angularFireAuth: AngularFireAuth,
    private fb: FormBuilder
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
    // this.angularFireAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((res: any) => {
    //     console.log(res);
    //     localStorage.setItem('token', res.token);
    //     // console.log('You're in!');
    //   })
    //   .catch((err) => {
    //     console.log('Something went wrong:', err.message);
    //   });
  }
}
