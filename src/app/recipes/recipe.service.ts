import { EventEmitter, Injectable } from '@angular/core';

// Import Recipe model to use in recipe service
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// To inject a service into another service
@Injectable()
// Service to manage our recipes
export class RecipeService {
    // Call a method in our service that will transform the data instead of chaining down components
    // New public property; it will be an object instantiated by using an EventEmitter
    recipeSelected = new EventEmitter<Recipe>(); // It will hold recipe data

    private recipes: Recipe[] = [
        // Need to pass in an array of ingredients for each Recipe now
        new Recipe(
            'Tasty Schnitzel', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Big Fat Burger', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
      ];

    constructor(private slService: ShoppingListService){}

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
}