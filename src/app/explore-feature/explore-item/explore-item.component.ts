import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-explore-item',
  templateUrl: './explore-item.component.html',
  styleUrls: ['./explore-item.component.scss'],
})
export class ExploreItemComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProject();
  }

  fetchProject(): void {
    const id = this.activatedRoute.snapshot.params['projectId'];

    this.apiService.getProject(id).subscribe((project) => {
      this.project = project;
      // console.log({project});
    });
  }
}
