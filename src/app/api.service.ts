import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProjects () {
    //TODO fetch data
    const {appUrl} = environment;
    return this.http.get(`${appUrl}api/themes`)
  }
}
