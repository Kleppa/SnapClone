import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {AddFriendComponent} from "../../components/add-friend/add-friend";
import {ComponentsModule} from "../../components/components.module";
import {FriendSuggestionResultComponent} from "../../components/friend-suggestion-result/friend-suggestion-result";

@NgModule({
  declarations: [
    HomePage,
    ComponentsModule,
    AddFriendComponent,
    FriendSuggestionResultComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})

export class HomePageModule {}
