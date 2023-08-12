import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/api.service';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  project: Project | undefined;
  // userId: string = '';
  projectId: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}

  editProject(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    const data = form.value;

    if (this.project) {
      this.apiService.editProject(data, this.project?._id).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      this.router.navigate(['/']); // TODO navigate to project's details page
    }
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
    // this.userId = this.cookie.get('userId');

    this.apiService.getProject(id).subscribe((project: Project) => {
      this.project = project;
      // this.projectId = project.userId;
      // console.log(project.userId);
    });
  }
}
