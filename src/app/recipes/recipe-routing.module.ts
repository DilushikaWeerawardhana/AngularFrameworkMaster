import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes.component';
import {InitialComponent} from './initial/initial.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const recipesRoutes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: '', component: InitialComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})

export class RecipeRoutingModule {
}
