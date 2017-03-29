import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
    constructor() { }

    getApiUrl(){
        //for emulator
        return 'http://10.0.2.2:12345';
        //for serve
        //return 'http://localhost:12345';
    }
}