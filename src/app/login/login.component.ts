import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    // private angularFireAuth: AngularFireAuth
    ) {}

  ngOnInit() {
    this.SignIn('nooruddin.saheb.ns@gmail.com', 'Test12345');
  }
  SignIn(email: string, password: string) {
    // this.angularFireAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((res) => {
    //     console.log(res);
    //     // console.log('You're in!');
    //   })
    //   .catch((err) => {
    //     console.log('Something went wrong:', err.message);
    //   });
  }
}
