import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs';
import {SignupFormData} from '../form.data.model';


@Component({
  selector: 'app-user-conten',
  templateUrl: './user-conten.component.html',
  styleUrls: ['./user-conten.component.css']
})
export class UserContenComponent implements OnInit, OnDestroy {
  postUser: SignupFormData[] = [];
  private postsSub: Subscription;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getData();
    this.postsSub = this.userService.getDataUpdateList()
      .subscribe((formData: SignupFormData[]) => {
        this.postUser = formData;
        }

      );
  }
  onDelete(postId: string) {
    this.userService.deletePost(postId);
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
