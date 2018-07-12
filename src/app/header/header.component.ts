import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorizationDataModel} from '../form.data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authorizationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.authorizationForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
      'rememData': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.authorizationForm.value);
    const authorizationForm: AuthorizationDataModel = {
      username: this.authorizationForm.value.username,
      password: this.authorizationForm.value.password,
      rememData: this.authorizationForm.value.rememData
    }
  }

}
