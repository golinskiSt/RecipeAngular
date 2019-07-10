import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../../Models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cookie', 'Dummy Cookie', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/05/thick-peanut-butter-oatmeal-chocolate-chip-cookies-6.jpg'),
    new Recipe('Cookie', 'Dummy Cookie', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/05/thick-peanut-butter-oatmeal-chocolate-chip-cookies-6.jpg'),
    new Recipe('Cookie', 'Dummy Cookie', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/05/thick-peanut-butter-oatmeal-chocolate-chip-cookies-6.jpg'),
    new Recipe('Cookie', 'Dummy Cookie', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/05/thick-peanut-butter-oatmeal-chocolate-chip-cookies-6.jpg'),
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
