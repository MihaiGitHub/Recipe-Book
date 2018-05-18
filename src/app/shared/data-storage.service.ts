import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){}

    storeRecipes(){ // PUT recipes on the server
       const token = this.authService.getToken();

       return this.http.put('https://ng-recipe-book-4bb73.firebaseio.com/recipes.json?auth='+token, 
            this.recipeService.getRecipes()
        );
    }

    getRecipes(){
        // When getting recipes need to attach unique token
        const token = this.authService.getToken();

        // Firebase will recognize the auth query parameter
        this.http.get('https://ng-recipe-book-4bb73.firebaseio.com/recipes.json?auth='+token)
            .map(
                (response: Response) => {
                    const recipes : Recipe[] = response.json();

                    // Set an empty ingredients array if recipe has none
                    for(let recipe of recipes){
                        if(!recipe['ingredients']){
                            recipe['ingredients'] = [];
                        }
                    }

                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                } 
            );
    }
}