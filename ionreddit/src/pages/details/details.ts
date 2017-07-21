import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//to access the items that is passed in 
//we use NavParams package

import { NavParams} from 'ionic-angular';


@Component({
  
  templateUrl: 'details.html'
})
export class DetailsPage {

 item: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
        this.item = params.get('item'); //therefore we will have access to entire item.
        console.log(this.params);
  }

}
