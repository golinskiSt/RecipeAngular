import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/Models/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomato', 1),
  ];
  constructor() { }

  ngOnInit() {
  }

}
