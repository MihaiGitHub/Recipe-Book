import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  // Need to differentiate wheather editing recipe or creating a new one
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // Determine edit/new recipe if ID is defined
          this.editMode = params['id'] != null;
          // Call this method every time the route params change which = page reload
          this.initForm();
        }
    );
  }

  // Initializing a reactive form; either empty if new recipe or in edit mode with existing recipe
  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    // if in edit mode grab the recipe being edited using recipe service
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }
}
