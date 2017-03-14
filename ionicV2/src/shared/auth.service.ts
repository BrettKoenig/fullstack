import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

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

  constructor(private http: Http){}
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
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
  // public register(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     // At this point store the credentials to your backend!
  //     return Observable.create(observer => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //     // this.http.post(`${this.baseUrl}/api/Account/Register`, credentials).map((response:Response) => {
  //     //       return response.json();
  //     // })
  //   }
  // }

      register(credentials) : Observable<any>{
        return this.http.post(`${this.baseUrl}/api/Account/Register`, credentials).map((response:Response) => {
            return response.json();
      })
    }
//  registration: $resource(appSettings.serverPath + "/api/Account/Register", null, {
//                 'registerUser': {method: 'POST'}
//             }),



        // vm.registerUser = function () {
        //     vm.userData.confirmPassword = vm.userData.password;

        //     userAccount.registration.registerUser(vm.userData, 
        //         function (data) {
        //             vm.confirmPassword = "";
        //             vm.message = "... Registration successful";
        //             vm.login();
        //         }, 
        //         function (response) {
        //             vm.isLoggedIn = false;
        //             vm.message = response.statusText + "\r\n";
        //             if (response.data.exceptionMessage) {
        //                 vm.message += response.data.exceptionMessage;
        //             }
        //             if (response.data.modelState) {
        //                 for (var key in response.data.modelState) {
        //                     vm.message += response.data.modelState[key] + "\r\n";
        //                 }
        //             }
        //         });
        // }

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

 
  public getUserInfo() : User {
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