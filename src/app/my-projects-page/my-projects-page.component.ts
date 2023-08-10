import { Component } from '@angular/core';
import { Project } from '../types/project';
import { ApiService } from 'src/api.service';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-projects-page',
  templateUrl: './my-projects-page.component.html',
  styleUrls: ['./my-projects-page.component.css'],
})
export class MyProjectsPageComponent {
  projectList: Project[] = [];
  userId: string = '';

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private cookie: CookieService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    // this.userId = this.userService.userId || '';
    // console.log(this.userService.userId);

    console.log(this.cookie.get('userId'));
    this.userId = this.cookie.get('userId');

    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectList = projects;
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      },
    });
  }
}
