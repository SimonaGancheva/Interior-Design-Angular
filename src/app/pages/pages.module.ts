import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    CreateProjectPageComponent,
    ExplorePageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ProfilePageComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    CreateProjectPageComponent,
    ExplorePageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ProfilePageComponent,
  ]
})
export class PagesModule {}
