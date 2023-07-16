import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-explore-work',
  templateUrl: './explore-work.component.html',
  styleUrls: ['./explore-work.component.scss'],
})
export class ExploreWorkComponent implements OnInit {
  projectList: Project[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLatestProjects(4).subscribe({
      next: (projects) => {
        this.projectList = projects;

        // this.isLoading = false;
      },
      error: (err) => {
        // this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
