import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Pass recipe that was selected so that we can listen to it from outside, events don't propagate up so must step them up in each 
  // component; child->parent
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipes();
  }

  // Expecting selected recipe of type recipe model from recipe-item component
  onRecipeSelected(recipe: Recipe){
      // using recipeWasSelected to send recipe model upwards to recipes component
      this.recipeWasSelected.emit(recipe);
  }  

}
