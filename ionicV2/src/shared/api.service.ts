import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Api {

    private baseUrl = 'http://localhost:58352';
    constructor(private http: Http) {

    }

    getTournaments(){
        return new Promise(resolve => {
            this.http.get(this.baseUrl + '/api/Values')
            .subscribe(res => resolve(res.json()));
        });
    }
}