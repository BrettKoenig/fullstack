import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class UserSettings {
    constructor(public storage: Storage, private Events: Events) { }

    favoriteTeam(standing) {
        this.storage.set("favorite-standing-" + standing.standingId, JSON.stringify(standing));
        this.Events.publish('favorites:changed');
    }

    unfavoriteTeam(standing) {
        this.storage.remove("favorite-standing-" + standing.standingId);
        this.Events.publish('favorites:changed');
    }

    isFavoriteTeam(standing) {
        return this.storage.get("favorite-standing-" + standing.standingId).then(value => value ? true : false);
    }

    getAllFavorites() {
        let items = [];
        this.storage.forEach((value, key, index) => {
            if(key.indexOf("favorite-standing-") > -1){
                items.push(JSON.parse(value));
            }
        }).then(function(){ return items.length > 0 ? items : null; });
        return items;
    }
}