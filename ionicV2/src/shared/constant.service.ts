import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
    constructor() { }

    getApiUrl(){
        return 'http://localhost:58352';
    }
}