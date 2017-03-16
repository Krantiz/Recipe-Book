import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
      new Recipe('Recipe1', 'Dummy Recipe', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--364143_11.jpg',[]),
      new Recipe('Recipe2', 'Dummy Recipe', 'http://4.bp.blogspot.com/-GOEQMgP48vY/UxgMmCf6j_I/AAAAAAAATH8/6CWDvxRqIbM/s1600/one-pot-cheesy-pasta-and-sausage-2014FB-wide2.jpg',[])
    ];

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

}
