import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // Set up listener and get informed about any changes
    // Event emitter will send a type of Recipe
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => { // ES6 syntax for function with argument of recipe
        this.selectedRecipe = recipe;
    })
  }

}
