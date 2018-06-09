import {Component} from '@angular/core';
import {HttpResponse} from '@angular/common/http';

import {DataStorageService} from '../../shared/data-storage.service';
import {Recipe} from '../../recipes/recipe.model';
import {AuthService} from '../../auth/auth.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor (private dataStorageService: DataStorageService, private authService: AuthService) {}
    onSave() {
        this.dataStorageService.storeRecipes().subscribe();
    }
    onFetch() {
        this.dataStorageService.getRecipes();
    }
}
