import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsComponent } from './contact-feature/contact-us/contact-us.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { ExploreItemComponent } from './explore-feature/explore-item/explore-item.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthActivate } from './core/guards/auth.activate';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CreateProjectPageComponent } from './pages/create-project-page/create-project-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

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
