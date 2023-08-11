import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { MyProjectsPageComponent } from './my-projects-page/my-projects-page.component';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectsPageComponent,
    MyProjectsPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class ProjectsFeaturesModule {}
