import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // Lazy Loading of RecipesModule only when /recipes is entered in the URL
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // need to specify name of class to load RecipesModule
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({ // Preloads all lazy loaded modules After the app has been loaded
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], // forRoot should only be called in app-routing.module
    exports: [RouterModule]
})
export class AppRoutingModule {

}