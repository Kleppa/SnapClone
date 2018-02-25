import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../interfaces/user.interface";
import {AngularFirestore} from "angularfire2/firestore";
import {InjectionToken} from "@angular/core";
import {Events, NavController, NavParams} from "ionic-angular"

/**
 * Generated class for the FriendSuggestionResultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'friend-suggestion-result',
  templateUrl: 'friend-suggestion-result.html'
})
export class FriendSuggestionResultComponent {
  friendDocs: Observable<User[]>;


  constructor(private af: AngularFirestore, private nav: NavParams,private event:Events) {

    this.event.subscribe('friends',data =>{
      console.log("Touched - FriendSuggestions")
      //filter out any users without the correct username
      this.friendDocs=data;
      this.friendDocs.map(value => {
        value.filter(user=>{

        })
      })

    });




  }


  onClickExit() {


    this.event.publish('changeFoundBool',false)
  }
}
