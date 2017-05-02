import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.mdel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test recipe',"This is test","http://clipartall.com/subimg/free-recipe-sheet-clip-art-recipe-clip-art-800_683.png")
  ];

  constructor() { }

  ngOnInit() {
  }

}
