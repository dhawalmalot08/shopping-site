import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://valentinascorner.com/wp-content/uploads/2019/04/Chilli-Recipe-9825-min.jpg' )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
