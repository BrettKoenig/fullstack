import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

export class User {
  name: string;
  email: string;
  token: string;

  constructor(name: string, email: string, token: string) {
    this.name = name;
    this.email = email;
    this.token = token;
  }
}

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:58352';
  currentUser: User;

  constructor(private http: Http) { }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // return Observable.create(observer => {
      //   // At this point make a request to your backend to make a real check!
      //   let access = (credentials.password === "pass" && credentials.email === "email");
      //   this.currentUser = new User('Simon', 'saimon@devdactic.com');
      //   observer.next(access);
      //   observer.complete();
      // });
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('userName', credentials.email);
      urlSearchParams.append('password', credentials.password);
      urlSearchParams.append('grant_type', 'password');
      let body = urlSearchParams.toString()
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlenconded' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(`${this.baseUrl}/Token`, body, options).map((response: Response) => {
        let jsonResponse = response.json();
        this.currentUser = new User(jsonResponse.userName, jsonResponse.userName, jsonResponse.access_token);
        return jsonResponse;
      });
    }
  }
  
  public register(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.post(`${this.baseUrl}/api/Account/Register`, credentials);
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    //send back to login
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}