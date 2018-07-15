import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';

import {SignupFormData} from './form.data.model';

@Injectable()
export class UserService {
  private formData: SignupFormData[] = [];
  private formDataUpdated = new Subject<SignupFormData[]>();

  constructor(private http: HttpClient) {}

  getData() {
    this.http.
    get<{message: string, postData: any }>(
      'http://localhost:3000/api/posts'
    )
      .pipe(map(postGetData => {
        return postGetData.postData.map(post => {
          return {
            gender: post.gender,
            lookingFor: post.lookingFor,
            between: post.between,
            location: post.location,
            id: post._id
          }
        })
      }))
      .subscribe(
        (transformPosts) => {
          this.formData = transformPosts;
          this.formDataUpdated.next([...this.formData]);
        });
  }

  getDataUpdateList() {
    return this.formDataUpdated.asObservable();
  }

  addData( gender: string,
           lookingFor: string,
           between: string,
           location: string) {
    const postData: SignupFormData = {
      id: null,
      gender: gender,
      lookingFor: lookingFor,
      between: between,
      location: location
    };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', postData)
      .subscribe((responseData) => {
        const id = responseData.postId;
        postData.id = id;
        this.formData.push(postData);
        this.formDataUpdated.next([...this.formData]);
      });
  }

  deletePost( postId: string ) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(() => {
        const updatedPosts = this.formData.filter(post => post.id !== postId);
        this.formData = updatedPosts;
        this.formDataUpdated.next([...this.formData]);
      })

  }
}
