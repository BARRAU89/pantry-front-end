import { Component } from '@angular/core';
import { RegisterService } from 'src/app/service/user/register.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  public username = ""
  public password = ""

  constructor (public reg:RegisterService) {

  }

}
