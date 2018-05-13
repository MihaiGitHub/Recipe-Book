import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeServices: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Listen to recipes changed event and update list; subscribing to recipes changed event
    this.recipeServices.recipesChanged.subscribe(
      // If changed will receive a new array of recipes 
      (recipes: Recipe[]) => {
        // Set old recipes array to new recipes array
        this.recipes = recipes;
      } 
    )
    this.recipes = this.recipeServices.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
