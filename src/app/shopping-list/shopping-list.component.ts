import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]; // set to uninitialized property

  // Inject ShoppingListService and bind it to a property name slService, which will
  // be of type ShoppingListService
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // Asign ingredients to what ShoppingListService returns
    this.ingredients = this.slService.getIngredients();
    // Reach out to ShoppingListService and subscribe to ingredientsChanged event
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { // When ingredients change will get them here
          // And update ingredients here
          this.ingredients = ingredients;
      }
    )
  }

}
