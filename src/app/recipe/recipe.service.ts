import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
      new Recipe('Recipe1', 'Dummy Recipe', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--364143_11.jpg',[
      	new Ingredient('water', 1),
      	new Ingredient('sugar', 2)
      	]),
      new Recipe('Recipe2', 'Dummy Recipe', 'http://4.bp.blogspot.com/-GOEQMgP48vY/UxgMmCf6j_I/AAAAAAAATH8/6CWDvxRqIbM/s1600/one-pot-cheesy-pasta-and-sausage-2014FB-wide2.jpg',[])
    ];

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleterecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

}
