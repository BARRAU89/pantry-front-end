import { Component } from '@angular/core';
import { RegisterService } from './service/user/register.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '00Pantry-FE';

  constructor (public reg:RegisterService, public loginSheet: MatBottomSheet){}
}
