import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Constant } from './constant.service';

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

  constructor(private http: Http, private Constant: Constant) { }

  private baseUrl = this.Constant.getApiUrl();
  currentUser: User;

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

  public setExternalUser(user) {
    // // let urlSearchParams = new URLSearchParams();
    // // //user.idToken,user.imageUrl,user.serverAuthCode,user.displayName,user.email,user.imageUrl
    // // urlSearchParams.append('token', user.idToken);
    // // urlSearchParams.append('serverCode', user.serverAuthCode);
    // // urlSearchParams.append('email', user.email);
    // // let body = urlSearchParams.toString()
    // // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlenconded' });
    // // let options = new RequestOptions({ headers: headers });
    // return this.http.post(`${this.baseUrl}/api/Account/RegisterExternalMobile`, user).map((response: Response) => {
    //   let jsonResponse = response.json();
    //   this.currentUser = new User(jsonResponse.userName, jsonResponse.userName, jsonResponse.access_token);
    //   return jsonResponse;
    // }).catch((error: any) => {
    //   return Observable.throw(error.json().error_description || 'Server error')
    // });

    console.log(`${this.baseUrl}/api/Account/RegisterExternalMobile`)

    return this.http.post(`${this.baseUrl}/api/Account/RegisterExternalMobile`, user).map((response: Response) => {
      let jsonResponse = response.json();
      this.currentUser = new User(jsonResponse.userName, jsonResponse.userName, jsonResponse.access_token);
      return jsonResponse;
    }).catch((error: any) => {
      return Observable.throw(error.json().error_description || 'Server error')
    });
    
    
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

  public getUserInfo() {
    //return this.currentUser;
    return Observable.create(observer => {
      this.currentUser ? observer.next(this.currentUser) : observer.next(false);
      observer.complete();
    });
  }

  public logout() {
    return Observable.create(observer => {
      this.http.post(`${this.baseUrl}/api/Account/Logout`, null, this.getAuthorizationHeader());
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  private getAuthorizationHeader() {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.currentUser.token });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}