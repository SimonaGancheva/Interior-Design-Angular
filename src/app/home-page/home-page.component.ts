import { Component } from '@angular/core';
import { ApiService } from 'src/api.service';
import { UserService } from '../user/user.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  projectList: Project[] = [];

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getProjects(4).subscribe({
      next: (projects) => {
        this.projectList = projects;
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      },
    });
  }
}
