import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemsComponent } from './recipe-items.component';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipe = new Recipe('Dummy', 'Dummy', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--364143_11.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
      this.recipeSelected.emit(recipe);
  }

}
