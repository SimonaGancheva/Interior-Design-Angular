import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Project } from 'src/app/types/project';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  projectList: Project[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectList = projects;
        console.log(projects);
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      }
    })
  }
}
