import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-items',
  templateUrl: './recipe-items.component.html'
})
export class RecipeItemsComponent implements OnInit {
    @Input() recipe: Recipe;
    recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
