import {Subject} from 'rxjs/index';

import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'First Recipe',
            `This is super taste home made recipe`,
            `http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg`,
            [new Ingredient('meat', 23), new Ingredient('french fries', 50)]
        ),
        new Recipe(
            'Second Recipe',
            'This is simply a test recipe',
            'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/' +
            'MR_0917170472.jpg?itok=KPTNrvis',
            [new Ingredient('apple', 2), new Ingredient('salt', 100)]
        )
    ];
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipeById(id: number) {
        return this.recipes[id];
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
