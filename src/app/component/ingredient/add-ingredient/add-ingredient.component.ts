import { Component } from '@angular/core';
import { IngredientService } from '../../../service/ingredient/ingredient.service';
import { Ingredient } from 'src/app/Models/ingredient';


@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent {
  public ingredient: Ingredient = new Ingredient(0,"", 0, 0, "", 0);
  public ingredientName: string = ''
  public ingredientWeight: number = 0
  public ingredientCalories: number = 0
  public ingredientImage: string = ''
  public inventoryCount: number = 0

  constructor(public is:IngredientService){}


}
