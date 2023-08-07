import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { Project } from 'src/app/types/project';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userService.isLogged) {
      this.fetchProject();
    } else {
      this.router.navigate(['/login'])
    }
  }

  fetchProject(): void {
    const id = this.activatedRoute.snapshot.params['projectId'];
    console.log(id);

    this.apiService.getProject(id).subscribe((project) => {
      this.project = project;
    });
  }
}
