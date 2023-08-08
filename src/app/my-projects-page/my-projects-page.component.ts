import { Component } from '@angular/core';
import { Project } from '../types/project';
import { ApiService } from 'src/api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-my-projects-page',
  templateUrl: './my-projects-page.component.html',
  styleUrls: ['./my-projects-page.component.css'],
})
export class MyProjectsPageComponent {
  projectList: Project[] = [];

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectList = projects;
        console.log(projects);
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      },
    });
    this.userService.getProfile().subscribe((res) => console.log(res));
  }
}
