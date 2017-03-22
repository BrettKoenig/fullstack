import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
    constructor() { }

    getApiUrl(){
        return '/api';
        //return 'http://localhost:58352';
        //return 'https://localhost:44339';
    }
}