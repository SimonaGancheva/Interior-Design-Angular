import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private userService: UserService) {}
  login(email: string, password: string): void {
    // TODO handle data to perform real login
    this.userService.login();
  }
}
