import { Component } from '@angular/core';
import { RegisterService } from 'src/app/service/user/register.service';
import { IngredientService } from 'src/app/service/ingredient/ingredient.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  public ingredientName = ''
  public ingredientWeight = 0
  public ingredientCalories = 0
  public ingredientImage = ''
  public ingredientOnHand = 0

  constructor (public reg:RegisterService, 
                public is:IngredientService,){

    this.is.displayIngredient()
  
  }

}
