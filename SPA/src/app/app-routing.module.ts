import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthActivate } from './guards/auth.activate';
import { ProjectDetailsComponent } from './projects-features/project-details/project-details.component';
import { ProjectsPageComponent } from './projects-features/projects-page/projects-page.component';
import { MyProjectsPageComponent } from './projects-features/my-projects-page/my-projects-page.component';
import { CreatePageComponent } from './projects-features/create-page/create-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { EditPageComponent } from './projects-features/edit-page/edit-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/:projectId', pathMatch: 'full', component: ProjectDetailsComponent },
  {
    path: 'create',
    component: CreatePageComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'projects/:projectId/edit',
    component: EditPageComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'my-projects',
    component: MyProjectsPageComponent,
    canActivate: [AuthActivate],
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
