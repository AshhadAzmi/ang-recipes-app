import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],

    imports: [
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent},
        ]),
        FormsModule,
        SharedModule
    ],
    // providers: [ LoggingService ]
})
export class ShoppingListModule {

}