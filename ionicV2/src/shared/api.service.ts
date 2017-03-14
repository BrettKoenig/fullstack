import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Api {

    private baseUrl = 'http://localhost:58352';

    currentTournament: any = {};
    private tournamentData = {};

    constructor(private http: Http) {

    }

    getTournaments() : Observable<any>{
        return this.http.get(`${this.baseUrl}/api/Tournaments`).map((response:Response) => {
            return response.json();
        })
    }

    // getTournamentData(tournamentId) : Observable<any>{
    //     return this.http.get(`${this.baseUrl}/api/Tournaments/${tournamentId}`).map((response:Response) => {
    //         return response.json();
    //     })
    // }

    getTournamentData(tournamentId, forceRefresh: boolean = false) : Observable<any>{
        if(!forceRefresh && this.tournamentData[tournamentId]){
            this.currentTournament = this.tournamentData[tournamentId];
            return Observable.of(this.currentTournament);
        }
        return this.http.get(`${this.baseUrl}/api/Tournaments/${tournamentId}`).map((response:Response) => {
            this.tournamentData[tournamentId] = response.json();
            this.currentTournament = this.tournamentData[tournamentId];
            return this.currentTournament;
        })
    }

    getTeamById(teamId) : Observable<any>{
        return this.http.get(`${this.baseUrl}/api/Teams/${teamId}`).map((response:Response) => {
            return response.json();
        })
    }

    setCurrentTournament(tournament){
        this.currentTournament = tournament
    }

    getCurrentTournament(){
        return this.currentTournament;
    }

    refreshCurrentTournament(){
        return this.getTournamentData(this.currentTournament.tournamentId, true)
    }
}