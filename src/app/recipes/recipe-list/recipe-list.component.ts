import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipe.mdel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() currentSelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', "This is test", "http://clipartall.com/subimg/free-recipe-sheet-clip-art-recipe-clip-art-800_683.png"), new Recipe('A 2nd test recipe', "This is 2nd test", "http://clipartall.com/subimg/free-recipe-sheet-clip-art-recipe-clip-art-800_683.png")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.currentSelectedRecipe.emit(recipe);
  }

}
