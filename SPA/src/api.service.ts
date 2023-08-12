import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Project } from './app/types/project';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  appUrl = environment.appUrl;

  constructor(private http: HttpClient) {}

  getProjects(limit?: number) {
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Project[]>(`${this.appUrl}api/projects${limitFilter}`);
  }


  getProject(id: string) {
    return this.http.get<Project>(`${this.appUrl}api/projects/${id}`);
  }

  postProject(project: Project) {
    return this.http
      .post<Project>(`${this.appUrl}api/projects`, project)
      .pipe(tap((event) => {
        if(event instanceof HttpResponse) {
          // console.log(event);
        }
      }))
      
  }

  editProject(project: Project, id: string) {    
    return this.http
      .put<Project>(`${this.appUrl}api/projects/${id}`, project)
      .pipe(tap((event) => {
        if(event instanceof HttpResponse) {
          console.log(event);
        }
      }))
      
  }



  deleteProject(id: string) {
    return this.http.delete<Project>(`${this.appUrl}api/projects/${id}`);
  }
}
