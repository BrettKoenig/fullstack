import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { InAppBrowser } from 'ionic-native';

import { Constant } from './constant.service';

import { ReplaySubject } from 'rxjs/Rx';
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
  private accessTokenSubject: ReplaySubject<any> = new ReplaySubject(1);

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

  //  public authenticateExternalProvider(provider){
  //   //can replace Facebook below with provider name
  //   //http%3A%2F%2Flocalhost%3A8100%2Fhome//
  //   //may need to redirect to something at 58352 that then returns to go to welcome
  //   let externalProviderUrl = `${this.baseUrl}/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A58352%2F&state=gZD8w0eIN59565ekXe_sGBckMPDk-ns2wetmcZFuVG01`

  //    return this.http.get(externalProviderUrl).map((response: Response) => {
  //      console.log("RESPL:", response)
  //           return response.json();
  //       })
  // }

  private getExternalLoginUrl = function() {
    var returnUrl = 'http%3A%2F%2Flocalhost%3A8100%2F';
    return this.http.get(`${this.baseUrl}/api/Account/ExternalLogins?returnUrl=${returnUrl}&generateState=true`)
    .map(response => {
      //this will need to change if more than facebook is enabled
      console.log("First:", response.json()[0].url)
      let data = response.json()[0];
      return data.url;
    })
  }

  private getExternalLoginScreen = function(url){
    console.log("Passing URL:", url);
    let loginScreenSubject = new ReplaySubject(1);
    let browser = new InAppBrowser(this.baseUrl + url, '_blank', 'location=no,toolbar=no,hardwareback=no,EnableViewPortScale=yes');

    browser.on("loadstop").subscribe((e) => {
      var accessToken = e.url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
      console.log("ACCESS:", accessToken)
      browser.close();

      loginScreenSubject.next(accessToken);
      loginScreenSubject.complete();
    },
    err => {
      console.log("InAppBrowser Loadstop Event Error: " + err);
    });

    return loginScreenSubject;
  }

  public facebookLogin(){
    console.log('calling facebook login');

    var accessTokenObservable = this.getExternalLoginUrl()
      .flatMap(url => this.getExternalLoginScreen(url));

      accessTokenObservable.subscribe(
        accessToken => {
          this.accessTokenSubject.next(accessToken);
          this.accessTokenSubject.complete();
        }, 
        err => {
          console.log("InAppBrowser Loadstop Event Error:" + err);
        });

        return this.accessTokenSubject;
  }
}