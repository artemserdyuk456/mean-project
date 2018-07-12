import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignupFormData} from '../form.data.model';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {
  public formRes: boolean;
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'gender': new FormControl(null, Validators.required ),
      'lookingFor': new FormControl(null, Validators.required),
      'between': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.formRes = false;
      const signupFormData: SignupFormData = {
          gender: this.signupForm.value.gender,
          lookingFor: this.signupForm.value.lookingFor,
          between: this.signupForm.value.between,
          location: this.signupForm.value.location
      }

    } else  {
      this.formRes = true;
    }

  }

}
