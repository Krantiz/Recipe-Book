import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemsComponent } from './recipe-items.component';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    // recipes: Recipe[] = [
    //   new Recipe('Recipe1', 'Dummy Recipe', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--364143_11.jpg',[]),
    //   new Recipe('Recipe2', 'Dummy Recipe', 'http://4.bp.blogspot.com/-GOEQMgP48vY/UxgMmCf6j_I/AAAAAAAATH8/6CWDvxRqIbM/s1600/one-pot-cheesy-pasta-and-sausage-2014FB-wide2.jpg',[])
    // ];
    // @Output() recipeSelected = new EventEmitter<Recipe>();

    // recipe = new Recipe('Dummy', 'Dummy', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--364143_11.jpg')

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
      // this.recipeSelected.emit(recipe);
  }

}
