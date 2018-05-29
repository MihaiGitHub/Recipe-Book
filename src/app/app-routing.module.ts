import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // Lazy Loading of RecipesModule only when /recipes is entered in the URL
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // need to specify name of class to load RecipesModule
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], // forRoot should only be called in app-routing.module
    exports: [RouterModule]
})
export class AppRoutingModule {

}