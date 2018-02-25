import { NgModule } from '@angular/core';
import { AddFriendComponent } from './add-friend/add-friend';
import { FriendSuggestionResultComponent } from './friend-suggestion-result/friend-suggestion-result';
@NgModule({
	declarations: [AddFriendComponent,
    FriendSuggestionResultComponent],
	imports: [],
	exports: [AddFriendComponent,
    FriendSuggestionResultComponent]
})
export class ComponentsModule {}
