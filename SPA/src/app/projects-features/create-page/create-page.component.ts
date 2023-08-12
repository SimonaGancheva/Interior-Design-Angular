import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  createProject(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // console.log(form.value);

    const data = form.value;


    this.apiService.postProject(data).subscribe();
    this.router.navigate(['/'])
  }
}
