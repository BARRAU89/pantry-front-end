import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';

import { AuthenticationComponent } from './component/authentication/authentication.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AddIngredientComponent } from './component/ingredient/add-ingredient/add-ingredient.component';
import { IngredientComponent } from './component/ingredient/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LandingPageComponent,
    HomePageComponent,
    AddIngredientComponent,
    IngredientComponent,

  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatBottomSheetModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
