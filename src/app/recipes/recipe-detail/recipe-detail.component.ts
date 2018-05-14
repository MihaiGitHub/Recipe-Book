import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  // Getting access to RecipeService
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // We want to react to changes in the URL id from the same page so we want to subscribe to an observable
    this.route.params.subscribe(
        (params: Params) => {
          // React to a new ID
          this.id = +params['id']; // This will return a string so need to cast it to a number with +
          this.recipe = this.recipeService.getRecipe(this.id);
        }
    );
  }

  onAddToShoppingList(){
    // Call recipeService and pass on the ingredients of this recipe
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    // Redirect to main page after delete
    this.router.navigate(['/recipes']);
  }
}
