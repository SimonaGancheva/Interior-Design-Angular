import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
  userId: string = '';
  projectId: string = '';

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private cookie: CookieService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get isAuthor(): boolean {
    return this.cookie.get('userId') == this.project?.userId._id
  }

  ngOnInit(): void {
    // if (this.userService.isLogged) {
      this.fetchProject();
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

  fetchProject(): void {
    const id = this.activatedRoute.snapshot.params['projectId'];
    // console.log(id);
    // console.log(this.cookie.get('userId'));
    this.userId = this.cookie.get('userId');

    this.apiService.getProject(id).subscribe((project) => {
      this.project = project;
      // this.projectId = project.userId;
      // console.log(project.userId);
    });
  }

  deleteProject(projectId: string): void {
    if(confirm('Are you sure you want to delete this project?')) {
      this.apiService.deleteProject(projectId).subscribe();
      this.router.navigate(['/my-projects'])
    }
  }
}
