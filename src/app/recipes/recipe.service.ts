import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Green salad',
      'healthy salad',
      'http://images.media-allrecipes.com/images/50800.jpg',
      [
        new Ingredient('Mixed Salad', 4),
        new Ingredient('Cheese', 2)
      ]),
    new Recipe('Pasta',
      'Delicious pasta',
      'http://www.seriouseats.com/images/2017/03/20170306-fast-pasta-recipes-roundup-collage.jpg',
      [
        new Ingredient('Pasta', 2),
        new Ingredient('Vegetables', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
