import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
    constructor() { }

    getApiUrl(){
        //return '10.0.2.2';
        return 'http://localhost:58352';
        //return 'http://localhost:58352';
        //return 'https://localhost:44339';
    }
}