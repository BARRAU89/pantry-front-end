import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ingredient } from 'src/app/Models/ingredient';
import { IngredientService } from 'src/app/service/ingredient/ingredient.service';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
  @Input() ingredient: Ingredient | undefined

  constructor (public is:IngredientService, public _snackBar:MatSnackBar){  //public rs:RecipeService
    
  }

  onDeleteIngredient(): void{
    if (this.ingredient === null) {
      this._snackBar.open('Invalid Ingredient', 'close', {duration :2000}) 
    } else {
      if (this.ingredient !== undefined){
        this.is.deleteIngredientById(this.ingredient.id);
      }
      
    }
  }

  addIngredientToCuttingBoard(){
    if(this.ingredient?.id && this.ingredient.inventoryCount! > 0){
      // this.rs.addIngredient(this.ingredient.id,1)
      this._snackBar.open('Ingredient added to Recipe!', undefined, {
      duration: 2000})}
  }

}
