import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-whats-trending',
  templateUrl: './whats-trending.component.html',
  styleUrls: ['./whats-trending.component.scss'],
})
export class WhatsTrendingComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.apiService.getProjects().subscribe((projects) => console.log(projects));
  }
}
