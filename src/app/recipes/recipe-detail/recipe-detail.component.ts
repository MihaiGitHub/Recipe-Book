import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // Adding Input so it can be set from outside; Must import Recipe model above to be able to use it in this component
  @Input() recipe: Recipe;

  // Getting access to RecipeService
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log('recipe ',this.recipe)
  }

  onAddToShoppingList(){
    // Call recipeService and pass on the ingredients of this recipe
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
