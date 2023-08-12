import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { MyProjectsPageComponent } from './my-projects-page/my-projects-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectsPageComponent,
    MyProjectsPageComponent,
    EditPageComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [],
})
export class ProjectsFeaturesModule {}
