import { Component } from '@angular/core';
import { RegisterService } from 'src/app/service/user/register.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor (public reg:RegisterService) {

  }

}
