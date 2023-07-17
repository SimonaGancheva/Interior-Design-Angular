import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Project } from './types/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProjects (limit?: number) {
    const {appUrl} = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Project[]>(`${appUrl}api/projects${limitFilter}`)
  }

  getProject(id: string) {
    const {appUrl} = environment;
    return this.http.get<Project>(`${appUrl}api/projects/${id}`)
  }
}
