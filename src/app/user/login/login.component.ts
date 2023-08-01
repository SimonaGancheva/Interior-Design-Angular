import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm): void {
    if (!form.invalid) return;


    // form.setValue({ email: '', password: '' });
    const value: { email: string; password: string } = form.value;
    console.log(value);

    // TODO handle data to perform real login
    this.userService.login();
    this.router.navigate(['/']);
  }
}
