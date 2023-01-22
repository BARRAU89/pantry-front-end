import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, take } from 'rxjs';
import { Ingredient } from 'src/app/Models/ingredient';
import { AddIngredientComponent } from 'src/app/component/ingredient/add-ingredient/add-ingredient.component';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http:HttpClient, 
    private snackBar:MatSnackBar,
    private dialog:MatDialog
    ) { }

public ingredients: Ingredient[] = [];

public getIngredients(): Ingredient [] {
return this.ingredients
}



private ingredientsInfo: Subject <Ingredient []> = new Subject();
////////////////////////////////////////////////////////////////

private ingredientId: number | undefined
private ingredientName: string | undefined
private ingredientWeight: number | undefined
private ingredientCalories: number | undefined
private ingredientImage: string | undefined
private ingredientOnHand: number | undefined

public getIngredientId(): number | undefined {
return this.ingredientId;
}

public getIngredientName(): string | undefined {
return this.ingredientName;
}

public getIngredientWeight(): number | undefined {
return this.ingredientWeight;
}

public getIngredientCalories(): number | undefined {
return this.ingredientCalories;
}

public getIngredientImage(): string | undefined {
return this.ingredientImage;
}

public getIngredientOnHand(): number | undefined {
return this.ingredientOnHand;
}

////////////////////////////////////////////////////////////////

public deleteIngredientById(id:number): void {
this.http
.delete(`http://localhost:8080/ingredients/${id}`)
.pipe(take(1))
.subscribe(() => this.updateIngredientsDisplayed())
}

public updateIngredientsDisplayed(): void {
this.http
.get<Ingredient[]>('http://localhost:8080/ingredients')
.pipe(take(1))
.subscribe( ingredients => {
this.ingredients = ingredients
this.ingredientsInfo.next(this.ingredients)
console.log('Update ingredients', this.ingredients) 
})
}

public createNewIngredient(ingredientName:string, ingredientWeight:number, ingredientCalories:number, ingredientImage:string, inventoryCount:number): void {
this.http
.post(`http://localhost:8080/ingredients`, {ingredientName, ingredientWeight, ingredientCalories, ingredientImage, inventoryCount})
.pipe(take(1))
.subscribe(()=> this.updateIngredientsDisplayed())
}

public displayIngredient():void{
this.http.get<Ingredient[]>(`http://localhost:8080/ingredients`)
.pipe(take(1))
.subscribe({
next: ingredients => {
if (ingredients.length <= 0) {
this.showError('There are no ingredients to display');
return
}
this.ingredients = ingredients;
},
error: err => {        
this.showError('Its not you, its us! Sorry, something went wrong.', ); 
}
})
}

/////////////////////////////////////////////////////////////////////

onCreateIngredientClick(){
this.dialog.open(AddIngredientComponent)
}

/////////////////////////////////////////////////////////////////////
private showError (message:string): void {
this.snackBar.open(message, 'close', { duration: 5000 });
}


}
