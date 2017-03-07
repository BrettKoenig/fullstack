import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Api {

    private baseUrl = 'http://localhost:58352';

    currentTournament: any = {};

    constructor(private http: Http) {

    }

    //old way with promises
    // getTournaments(){
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/api/Tournaments`)
    //         .subscribe(res => resolve(res.json()));
    //     });
    // }

    //new way with observable
    getTournaments() : Observable<any>{
        return this.http.get(`${this.baseUrl}/api/Tournaments`).map((response:Response) => {
            return response.json();
        })
    }

    setCurrentTournament(tournament){
        this.currentTournament = tournament
    }
    // getTournamentData(tourneyId) : Observable<any>{
    //     return this.http.get(`${this.baseUrl}/api/Tournaments/GetTeamsInTournament/${tourneyId}`).map((response:Response) => {
    //         this.currentTourney = response.json();
    //         return this.currentTourney;
    //     });
    // }
}