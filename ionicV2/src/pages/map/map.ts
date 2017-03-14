import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Api } from '../../shared/shared';
declare var window: any;
/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private Api: Api) {}
  map: any = {};
  
  
  ionViewDidLoad(){
    let game = this.navParams.data;
    
    let location = game.location;

    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: location.name
    };

  }

  getDirections() { 
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  }
}
