import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/types/project';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  projectList: Project[] = [];

  constructor(private userService: UserService, private router: Router) {}

  // public get userId(): string {
  //   return this.userService.currId || '';
  // }

  // userId = this.userService.currId;

  public get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
