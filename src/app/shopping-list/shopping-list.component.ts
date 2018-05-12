import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; // set to uninitialized property
  private subscription: Subscription;

  // Inject ShoppingListService and bind it to a property name slService, which will
  // be of type ShoppingListService
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // Asign ingredients to what ShoppingListService returns
    this.ingredients = this.slService.getIngredients();
    // Reach out to ShoppingListService and subscribe to ingredientsChanged event
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { // When ingredients change will get them here
          // And update ingredients here
          this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index: number){ // Get this info to the shopping edit component using the service
    // Reaching out to a subject in the service to listen to the onclick
    // Use startedEditing and emit a new value; pass on the index to the subject
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){ // Destroy observable to prevent any memory leaks
    this.subscription.unsubscribe();
  }

}
