import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
      this.subscription = this.shoppingListService.startEditing.subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredientByIndex(index);
          this.shoppingListForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
          });
        }
    );
  }
  onSubmit() {
    const ingredient = new Ingredient(this.shoppingListForm.value.name, this.shoppingListForm.value.amount);
    if (this.editMode) {
        this.shoppingListService.updateIngredient(ingredient, this.editedItemIndex);
    } else {
        this.shoppingListService.addIngredient(ingredient);
    }
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
