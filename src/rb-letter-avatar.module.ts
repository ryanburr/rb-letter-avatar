import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RbLetterAvatarComponent} from "./letter-avatar/rb-letter-avatar.component";


@NgModule({
    imports: [CommonModule],
    declarations: [RbLetterAvatarComponent],
    providers: [],
    exports: [RbLetterAvatarComponent]
})
export class RbUtilityModule { }
