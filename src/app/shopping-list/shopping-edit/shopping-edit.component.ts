import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'; 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // Use output to be able to listen to this event from outside
  @Output() ingredientAdded = new EventEmitter<Ingredient>();  // Passing Ingredient model from shared folder as argument

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){  // Using element reference to get name and amount values from form and create new Ingredient
    const ingName = this.nameInputRef.nativeElement.value;  // Should declare something as const if you don't plan to change it
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);  // Must use emit method to broadcast event to parent component!
  }

}
