import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [DropdownDirective],
    // Export it to make it be able to be used from outside
    exports: [CommonModule, DropdownDirective] // Export DropdownDirective to be able to use it in other modules
})
export class SharedModule {}