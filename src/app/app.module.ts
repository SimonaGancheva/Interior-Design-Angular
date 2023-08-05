import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectsFeaturesModule } from './projects-features/projects-features.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import {CookieService} from 'ngx-cookie-service';
import { CreatePageComponent } from './create-page/create-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ProjectsPageComponent, CreatePageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    ProjectsFeaturesModule,
    HttpClientModule,
    FormsModule, UserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
