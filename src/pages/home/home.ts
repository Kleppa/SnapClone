import {Component,Input} from '@angular/core';
import {Events, ModalController, NavController} from 'ionic-angular';
import _ from "lodash";
import {AngularFirestore} from "angularfire2/firestore";
import {User} from "../../interfaces/user.interface";
import {FriendSuggestionResultComponent} from "../../components/friend-suggestion-result/friend-suggestion-result";

import {AddFriendComponent} from "../../components/add-friend/add-friend";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private isLookingForFriend: boolean = false;
  private user: any;
  foundFriends: boolean = false;


  constructor(public navCtrl: NavController, private af: AngularFirestore, public event:Events) {
    this.isLookingForFriend = false;
    this.user = this.af.app.auth().currentUser;

    this.event.subscribe('changedBool',val=>{
      this.isLookingForFriend=val;
      this.foundFriends=!this.isLookingForFriend;
    });

    this.event.subscribe('foundUsers',val=>{
      console.log("touched")
      this.event.publish('friends',val);
    })

  }

  addFriend() {
    this.isLookingForFriend = true;
  }

  logout() {
    this.af.app.auth().signOut();
  }

  onFindFriend() {

    //this.isLookingForFriend=bool;

  }
}
