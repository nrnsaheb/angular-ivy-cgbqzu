import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent implements OnInit {
  bioSection!: FormGroup;
  // bioSection: any;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.bioSection = this.fb.group({
      userName: ['', [Validators.required]],
      eMail: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z0-9.-]{2,5}$'
          ),
        ],
      ],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  Submit() {
    console.log(this.bioSection.value);
    this.auth
      .createUserWithEmailAndPassword(
        this.bioSection.value.eMail,
        this.bioSection.value.password
      )
      .then((response) => {
        console.log(response);
        if (response) {
          this.router.navigate(['/login']);
        }
      });
  }
  get controls() {
    console.log(this.bioSection.controls);
    return this.bioSection.controls;
  }
}
