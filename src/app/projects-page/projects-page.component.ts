import { Component } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projectList: Project[] = [];

  constructor(private apiService: ApiService) {}

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
