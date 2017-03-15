import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
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

      

      // return this.http.post(`${this.baseUrl}/api/Account/Register`, credentials).map((response: Response) => {
      //   return response;
      // })

      // credentials.userName = credentials.email;
      // credentials.grant_type = "password";
      let urlSearchParams = new URLSearchParams();
urlSearchParams.append('userName', credentials.email);
urlSearchParams.append('password', credentials.password);
urlSearchParams.append('grant_type', 'password');
let body = urlSearchParams.toString()
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlenconded' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(`${this.baseUrl}/Token`, body, options).map((response: Response) => {
        return response.json();
      });
    }
  }
  // login: $resource(appSettings.serverPath + "/Token", null, {
  //               'loginUser': {
  //                   method: 'POST',
  //                   headers: { 'Content-Type': 'application/x-www-form-urlenconded' },
  //                   transformRequest: function (data, headersGetter) {
  //                       var str = [];
  //                       for (var d in data) {
  //                           str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  //                       }
  //                       return str.join("&");
  //                   }
  //               }
  //           })
  public register(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.post(`${this.baseUrl}/api/Account/Register`, credentials);
    }
  }

  // vm.login = function () {
  //     vm.userData.grant_type = "password";
  //     vm.userData.userName = vm.userData.email;

  //     userAccount.login.loginUser(vm.userData,
  //         function (data) {
  //             vm.message = "";
  //             vm.password = "";
  //             vm.token = data.access_token;
  //             currentUser.setProfile(vm.userData.userName, data.access_token);
  //         },
  //         function (response) {
  //             vm.password = "";
  //             vm.message = response.statusText + "\r\n";
  //             if (response.data.exceptionMessage) {
  //                 vm.message += response.data.exceptionMessage;
  //             }
  //             if (response.data.error) {
  //                 vm.message += response.data.error;
  //             }
  //         });
  // }


  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}