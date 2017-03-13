import { Injectable } from '@angular/core';
import _ from 'lodash';

import { Storage } from '@ionic/storage';

@Injectable()
export class UserSettings {
    constructor(public storage: Storage) { }

    favoriteTeam(standing) {
        this.storage.set("favorite-standing-" + standing.standingId, JSON.stringify(standing));
    }

    unfavoriteTeam(standing) {
        this.storage.remove("favorite-standing-" + standing.standingId);
    }

    isFavoriteTeam(standing) {
        return this.storage.get("favorite-standing-" + standing.standingId).then(value => value ? true : false);
    }

    getAllFavorites() {
        let items = [];
        // this.storage.keys().then( values => _.forIn(values, value => {
        //     items.push(JSON.parse(this.storage.get(value)));
        // }))
        this.storage.forEach((value, key, index) => {
            if(key.indexOf("favorite-standing-") > -1){
                items.push(JSON.parse(value));
            }
        }).then(function(){ return items.length > 0 ? items : null; });
//data => items = tempItems.length > 0 ? tempItems : null
        return items;
        
    }
}