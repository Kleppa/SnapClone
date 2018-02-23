import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {AddFriendComponent} from "../../components/add-friend/add-friend";

@NgModule({
  declarations: [
    HomePage,
    AddFriendComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
