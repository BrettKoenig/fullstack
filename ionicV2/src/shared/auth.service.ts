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
      }).catch((error: any) => {
        return Observable.throw(error.json().error_description || 'Server error')
      });
    }
  }

  public register(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.post(`${this.baseUrl}/api/Account/Register`, credentials).catch((error: any) => {
        for (var key in error.json().modelState) {
          for (var i = 0; i < error.json().modelState[key].length; i++) {
            if (key != "$id") {
              return Observable.throw(error.json().modelState[key][i]);
            }
          }
        }
        return Observable.throw('Server error');
      });
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