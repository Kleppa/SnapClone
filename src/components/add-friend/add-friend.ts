import {Component, EventEmitter, Output} from '@angular/core';


import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {User} from "../../interfaces/user.interface";
import 'rxjs/add/operator/map'
import { Events } from 'ionic-angular';
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the AddFriendComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'add-friend',
  templateUrl: 'add-friend.html'
})
export class AddFriendComponent {

  private userToAdd = {username: ""};

  friendDoc: Observable<User[]>;
  // @Output() emitter = new EventEmitter<Observable<User[]>>();

  @Output() booleanEmitter: Event;

  constructor(private af: AngularFirestore, private nav: NavParams, private nvCtrl: NavController, private event:Events) {
  }


  findFriend() {


    this.friendDoc = this.findUsers();



    this.event.publish('changedBool',false);
    //this.booleanEmitter.emit(false);
    this.event.publish('foundUsers',this.friendDoc);


    // new FriendSuggestionResultComponent(this.userToAdd.username,this.af);

  }

  private findUsers() :Observable<User[]> {
    return this.af.collection<User>('Users')                // Spesifiserer at det er Firestore-kolleksjonen "posts" vi ønsker å hente data fra
      .snapshotChanges()                                // Henter ned data og lytter på endringer i Firestore-datasettet vårt
      .map(actions => {
        return actions.map(action => {                  // Én "action" representerer én post i Firestore
          let data = action.payload.doc.data() as User; // Vi 'mapper' dataen vi får fra Firestore til Post-klassen vår
          let id = action.payload.doc.id;
          // Henter ut postens ID (, ID generert av Firestore)

             if (this.userToAdd.username == data.username) {
               return {
                 id,
                 ...data
               };
             }

        });
      });
  }
}
