import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) {}
    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(
            'https://recipe-book-d665e.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes()
        );
    }
    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://recipe-book-d665e.firebaseio.com/recipes.json?auth=' + token).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
