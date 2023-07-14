import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Project } from './types/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProjects () {
    const {appUrl} = environment;
    return this.http.get<Project[]>(`${appUrl}api/projects`)
  }
}
