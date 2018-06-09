import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/index';

export class ShoppingListService {
    ingredientListChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatos', 3)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientListChanged.next(this.ingredients.slice());
    }
    updateIngredient(ingredient: Ingredient, index: number) {
        this.ingredients[index] = ingredient;
        this.ingredientListChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientListChanged.next(this.ingredients.slice());
    }
    getIngredientByIndex(index: number) {
        return this.ingredients[index];
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientListChanged.next(this.ingredients.slice());
    }
}
