import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/types/project';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-explore-work',
  templateUrl: './explore-work.component.html',
  styleUrls: ['./explore-work.component.scss'],
})
export class ExploreWorkComponent implements OnInit{
  projectList: Project[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects(4).subscribe({
      next: (projects) => {
        this.projectList = projects;
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      }
    })
  }
}
