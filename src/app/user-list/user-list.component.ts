import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserService} from '../user.service';
import {SignupFormData} from '../form.data.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  postUser: SignupFormData[] = [];
  private postsSub: Subscription;
  createRole: FormGroup;

  createUser: SignupFormData = [
    {
      id: '',
      gender: '',
      lookingFor: '',
      between: '',
      location: ''
    }
  ];

  constructor(private router: Router,
              public userService: UserService) {}

  ngOnInit() {
    this.createRole = new FormGroup({
      'role': new FormControl(null, Validators.required )
    });


    this.userService.getData();
    this.postsSub = this.userService.getDataUpdateList()
      .subscribe((formData: SignupFormData[]) => {
          this.postUser = formData;
        }
      );
  }

  createNewUser() {
    this.userService.addData(
      this.createUser.gender,
      this.createUser.lookingFor,
      this.createUser.between,
      this.createUser.gender,
    );
  }

  onDelete(postId: string) {
    this.userService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  goToMainPage() {
    this.router.navigate(['']);
  }
}
