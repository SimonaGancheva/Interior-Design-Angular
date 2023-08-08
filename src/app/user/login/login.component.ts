import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  USER_KEY = '[user]';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(
      (res) => {
        localStorage.setItem(this.USER_KEY, JSON.stringify(res?.email));
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.errorMessage = 'Email and password do not match!';
        form.reset()
      }
    );
  }
}
