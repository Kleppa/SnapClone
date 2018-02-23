import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from "lodash";
import {AngularFirestore} from "angularfire2/firestore";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private showAddFriend:boolean;

  constructor(public navCtrl: NavController,private af:AngularFirestore) {
    this.showAddFriend=true;
  }

  addFriend() {
    this.showAddFriend=true;
  }
}
