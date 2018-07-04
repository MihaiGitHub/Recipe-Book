import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
    declarations: [HeaderComponent, HomeComponent],
    imports: [SharedModule, AppRoutingModule, NguCarouselModule],
    exports: [AppRoutingModule, HeaderComponent], // Always need root routes in the app module
    // this core module is imported in app.module.ts so these services will be available throughout the app
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule {}