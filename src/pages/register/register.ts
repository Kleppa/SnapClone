import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../interfaces/user.interface";
import {AngularFirestore} from "angularfire2/firestore";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private user = {
    username: '',
    password: '',
    email: ''
  } as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    this.af.app.auth().createUserWithEmailAndPassword(this.user.email,this.user.password)
  }

  login() {
    this.af.app.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
  }
  logout(){
    this.af.app.auth().signOut();
  }
}
