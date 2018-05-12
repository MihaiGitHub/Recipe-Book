import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    // Inform component that new data is available; it will emit our Ingredient array
    ingredientsChanged = new Subject<Ingredient[]>();
    // Add new subject that will hold a number in the end
    startedEditing = new Subject<number>();

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

    getIngredient(index: number){
        return this.ingredients[index];
    }
    // Will receive an ingredient of type ingredient
    addIngredient(ingredient: Ingredient){
        // Access ingredient array and push new ingredient into it
        this.ingredients.push(ingredient);
        // When Ingredient array is changed call and emit a copy of the array
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // Add all ingredients in one go and then emit event
        this.ingredients.push(...ingredients); // ES6 feature to turn an array of elements into a list of elements
        // Need to emit that ingredients have changed
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}