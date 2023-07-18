import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Project } from 'src/app/types/project';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  projectList: Project[] = [];
  currentId: string = '64b394c49263f65f19c097bc';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.username || '';
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectList = projects;
        const latestProject = projects[0];
        this.currentId = latestProject._id;
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      }
    })

  }

 
  // getCurrentId(): void {
  //   let id = this.activatedRoute.snapshot.params['projectId'];

  //   if (id) {
  //     this.currentId = id;
  //   }
  // }
}
