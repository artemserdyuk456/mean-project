import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

import {SignupFormData} from './form.data.model';

@Injectable()
export class UserService {
  private formData: SignupFormData[] = [];
  private formDataUpdated = new Subject<SignupFormData[]>();

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get<{message: string, postData: SignupFormData[] }>('http://localhost:3000/api/posts')
      .subscribe(
        (servData) => {
          this.formData = servData.postData;
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
    this.http.post<{message: string}>('http://localhost:3000/api/posts', postData)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.formData.push(postData);
        this.formDataUpdated.next([...this.formData]);
      });
  }
}
