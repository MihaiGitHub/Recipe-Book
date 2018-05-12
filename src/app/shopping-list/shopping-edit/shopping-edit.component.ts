import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model'; 
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  // Store index of item being edited
  editedItemIndex: number;
  editedItem: Ingredient;

  // We now use the service for communication
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // Listen to the startedEditing Subject and store subscription into a property which can be destroyed later
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        // Only get inside of this function if user has started editing
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        // Reach out to form and call setValue
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form: NgForm){  // Receiving form object here
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(){ // Clean up the subscription so as not to create a memory leak
    this.subscription.unsubscribe();
  }

}
