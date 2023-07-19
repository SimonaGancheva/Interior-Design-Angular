import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ExploreItemComponent } from './explore-item/explore-item.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthActivate } from './core/guards/auth.activate';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'explore/:projectId',
    component: ExplorePageComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'create',
    component: CreateProjectPageComponent,
    canActivate: [AuthActivate],
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
