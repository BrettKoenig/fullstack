import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Api {

    private baseUrl = 'http://localhost:58352';

    currentTourney: any = {};

    constructor(private http: Http) {

    }

    getTournaments(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/api/Tournaments`)
            .subscribe(res => resolve(res.json()));
        });
    }

    getTournamentData(tourneyId) : Observable<any>{
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`).map((response:Response) => {
            this.currentTourney = response.json();
            return this.currentTourney;
        });
    }
}