import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeServices: RecipeService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    // Listen to recipes changed event and update list; subscribing to recipes changed event
   this.subscription = this.recipeServices.recipesChanged.subscribe(
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

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
