import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // Recipe ID if editing a recipe
  id: number;
  // Need to differentiate wheather editing recipe or creating a new one
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

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

  onSubmit(){ // On submit update or add new recipe
    if(this.editMode){
      // Update an existing recipe by passing the id and values from the form
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel(); // Navigate away after form submit
  }

  onAddIngredient(){
    // Add a new control to the array of Form Controls; Access recipeForm and get ingredients array
    // Typescript doesn't know the ingredients are an array so have to cast it as an array
    (<FormArray>this.recipeForm.get('ingredients')).push( // Create new ingredient and push it into ingredient []
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,  [ // Default value set to null
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel(){ // On cancel navigate away
    this.router.navigate(['../'], {relativeTo: this.route});
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
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])  
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }
}
