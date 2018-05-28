import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

import { AuthRoutingModule } from "./auth-routing.module";

// Add NgModule to make this a module
@NgModule({
    // Declare which components and directives to use in this module
    declarations: [SigninComponent, SignupComponent],
    // Import any modules needed for this module
    imports: [FormsModule, AuthRoutingModule]
})
export class AuthModule {}