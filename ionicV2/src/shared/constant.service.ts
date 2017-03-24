import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
    constructor() { }

    getApiUrl(){
        //return '192.168.94.1:58352'
        //return 'http://10.0.2.2:58352';
        return 'http://localhost:58352';
        //return 'https://localhost:44339';
    }
}