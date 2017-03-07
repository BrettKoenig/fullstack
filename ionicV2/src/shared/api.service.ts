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

    getTournaments() : Observable<any>{
        return this.http.get(`${this.baseUrl}/api/Tournaments`).map((response:Response) => {
            console.log(response.json())
            return response.json();
        })
    }

    setCurrentTournament(tournament){
        this.currentTournament = tournament
    }

    getCurrentTournament(){
        return this.currentTournament;
    }
}