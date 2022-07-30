import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent implements OnInit {
  // bioSection = new FormGroup({
  //   userName: new FormControl('',{validators:required}),
  //   eMail: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });
  bioSection: FormGroup;
  constructor(private fb: FormBuilder) {}

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
  }
  get eMail() {
    return this.bioSection.get('eMail');
  }
}
