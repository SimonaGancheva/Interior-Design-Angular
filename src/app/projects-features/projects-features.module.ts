import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';




@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectDetailsComponent,
  
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ProjectCardComponent]
})
export class ProjectsFeaturesModule { }
