import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent],
    imports: [CommonModule, FormsModule], // Only use FormsModule in the shopping list components so can be placed here
})
export class ShoppingListModule {}