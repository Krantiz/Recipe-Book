import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-items',
  templateUrl: './recipe-items.component.html'
})
export class RecipeItemsComponent {
    @Input() recipe: Recipe;
    @Input() recipeId: number;

  

}
