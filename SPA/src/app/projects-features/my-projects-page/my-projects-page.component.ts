import { Component } from '@angular/core';

import { ApiService } from 'src/api.service';

import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/user/user.service';
import { Project } from 'src/app/types/project';
import { Router } from '@angular/router';

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
    private cookie: CookieService,
    private router: Router
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

  deleteProject(projectId: string): void {
    this.apiService.deleteProject(projectId).subscribe(() => this.router.navigate(['/projects']))
  }
}