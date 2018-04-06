import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // Adding Input so it can be set from outside; Must import Recipe model above to be able to use it in this component
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
    console.log('recipe ',this.recipe)
  }

}
