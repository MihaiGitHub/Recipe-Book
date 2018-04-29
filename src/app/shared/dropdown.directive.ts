import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ // Have a unique name that doesn't interfere with anything
  selector: '[appDropdown]'
})
export class DropdownDirective{
// Allows us to bind to properties of the element that its placed on; 
// class here is an array of classes
    @HostBinding('class.open') isOpen = false; // When isOpen switches to false the class will be removed

    @HostListener('click') toggleOpen() {
        // Everytime you click it sets isOpen to what it was not
        this.isOpen = !this.isOpen;
    }
}