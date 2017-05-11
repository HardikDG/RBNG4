import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('name') nameRef: ElementRef;
 @ViewChild('amount') amountRef: ElementRef;
 @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const newIng = new Ingredient(name,amount)
    this.newIngredient.emit(newIng);
  }

}
