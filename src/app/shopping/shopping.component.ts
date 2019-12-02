import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
ingredients: Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Tomotoes',6)
];
  constructor() { }

  ngOnInit() {
  }

}
