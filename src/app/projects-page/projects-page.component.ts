import { Component } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Project } from '../types/project';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projectList: Project[] = [];

  constructor(private apiService: ApiService, private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectList = projects;
        
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      }
    })
  }

}
