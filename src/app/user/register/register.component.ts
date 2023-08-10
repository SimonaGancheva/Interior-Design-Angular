import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  USER_KEY = '[user]';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // console.log(form.value);

    const { email, username, password, rePassword } = form.value;

    this.userService.register(email, username, password, rePassword).subscribe(
      (res) => {
        localStorage.setItem(this.USER_KEY, JSON.stringify(res?.email));
        this.router.navigate(['/']);
      },
      (error) => {
        // console.log(error);
        // console.log(error.error.message);

        this.errorMessage = error.error.message;
        form.reset();
      }
    );
  }
}
