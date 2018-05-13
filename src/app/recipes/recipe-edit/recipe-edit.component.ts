import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
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

  onSubmit(){
    console.log(this.recipeForm);
  }

  onAddIngredient(){
    // Add a new control to the array of Form Controls; Access recipeForm and get ingredients array
    // Typescript doesn't know the ingredients are an array so have to cast it as an array
    (<FormArray>this.recipeForm.get('ingredients')).push( // Create new ingredient and push it into ingredient []
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  // Initializing a reactive form; either empty if new recipe or in edit mode with existing recipe
  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]); // Ingredients initialized with empty value of []

    // if in edit mode grab the recipe being edited using recipe service
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      // Check if existing recipe already had ingredients; they could be empty
      if(recipe['ingredients']){
        // If recipe already has ingredients push them into an array
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)  
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }
}
