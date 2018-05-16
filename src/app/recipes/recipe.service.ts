import { Injectable } from '@angular/core';

// Import Recipe model to use in recipe service
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

// To inject a service into another service
@Injectable()
// Service to manage our recipes
export class RecipeService {
    // Recipes changed event which will pass an array of Recipes as a value
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // Need to pass in an array of ingredients for each Recipe now
        new Recipe(
            'Tasty Schnitzel', 
            'This is simply a test', 
            'http://images.media-allrecipes.com/images/68135.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Big Fat Burger', 
            'This is simply a test', 
            'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.966.725.jpeg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
      ];

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        // Will return a new array, which is an exact copy of the array in the service file
        return this.recipes.slice();
    }

    // Load a single recipe by ID
    getRecipe(index: number){
        return this.recipes[index]; // Return this recipes and select the item at the ID index
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        // Refresh recipes array; Recipe changed event emits a new value (copy of new recipes)
        this.recipesChanged.next(this.recipes.slice());
    }

    // On update completely overwrite old recipe with new info
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        // Refresh recipes array, but must listen to it in ngOnInit in RecipeList component
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        // Refresh recipes array after deleting one
        this.recipesChanged.next(this.recipes.slice());
    }
}