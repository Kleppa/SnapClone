import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import env from '../env';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database'
import {ComponentsModule} from "../components/components.module";
import {AddFriendComponent} from "../components/add-friend/add-friend";

@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(env),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
