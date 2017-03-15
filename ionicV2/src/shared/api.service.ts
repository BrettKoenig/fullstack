import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

//import { AuthService } from '../shared/shared';

import { AuthService } from './auth.service';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Api {

    private baseUrl = 'http://localhost:58352';

    currentTournament: any = {};
    private tournamentData = {};

    constructor(private http: Http, private AuthService: AuthService) {

    }

    private getAuthorizationHeader(){
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthService.currentUser.token });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    getTournaments(): Observable<any> {
        return this.http.get(`${this.baseUrl}/api/Tournaments`, this.getAuthorizationHeader()).map((response: Response) => {
            return response.json();
        })
    }

    getTournamentData(tournamentId, forceRefresh: boolean = false): Observable<any> {
        if (!forceRefresh && this.tournamentData[tournamentId]) {
            this.currentTournament = this.tournamentData[tournamentId];
            return Observable.of(this.currentTournament);
        }
        return this.http.get(`${this.baseUrl}/api/Tournaments/${tournamentId}`, this.getAuthorizationHeader()).map((response: Response) => {
            this.tournamentData[tournamentId] = response.json();
            this.currentTournament = this.tournamentData[tournamentId];
            return this.currentTournament;
        })
    }

    getTeamById(teamId): Observable<any> {
        return this.http.get(`${this.baseUrl}/api/Teams/${teamId}`, this.getAuthorizationHeader()).map((response: Response) => {
            return response.json();
        })
    }

    setCurrentTournament(tournament) {
        this.currentTournament = tournament
    }

    getCurrentTournament() {
        return this.currentTournament;
    }

    refreshCurrentTournament() {
        return this.getTournamentData(this.currentTournament.tournamentId, true)
    }
}