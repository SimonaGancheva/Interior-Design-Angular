import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { AuthActivate } from './guards/auth.activate';
import { NoAuthActivate } from './guards/noAuth.activate';
import { ProjectDetailsComponent } from './projects-features/project-details/project-details.component';
import { MyProjectsPageComponent } from './my-projects-page/my-projects-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/:projectId', component: ProjectDetailsComponent },
  { path: 'login', component: LoginComponent }, // TODO route guard for authenticated users
  { path: 'register', component: RegisterComponent },
  {
    path: 'create',
    component: CreatePageComponent,
    canActivate: [AuthActivate],
  },
  {path: 'my-projects', component: MyProjectsPageComponent, canActivate: [AuthActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
