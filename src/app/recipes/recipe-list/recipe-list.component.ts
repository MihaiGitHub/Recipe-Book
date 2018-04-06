import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Pass recipe that was selected so that we can listen to it from outside, events don't propagate up so must step them up in each 
  // component; child->parent
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('Another Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  // Expecting selected recipe of type recipe model from recipe-item component
  onRecipeSelected(recipe: Recipe){
      // using recipeWasSelected to send recipe model upwards to recipes component
      this.recipeWasSelected.emit(recipe);
  }  

}
