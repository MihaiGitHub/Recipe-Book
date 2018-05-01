import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    // Inform component that new data is available; it will emit our Ingredient array
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){ 
        // Return ingredients but only a copy of them using the slice method, so can't access
        // original array stored in service
        // If need the real array, do not use slice()
        return this.ingredients.slice();
    }
    // Will receive an ingredient of type ingredient
    addIngredient(ingredient: Ingredient){
        // Access ingredient array and push new ingredient into it
        this.ingredients.push(ingredient);
        // When Ingredient array is changed call and emit a copy of the array
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}