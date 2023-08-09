import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectsFeaturesModule } from './projects-features/projects-features.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CreatePageComponent } from './create-page/create-page.component';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { UserService } from './user/user.service';
import { MyProjectsPageComponent } from './my-projects-page/my-projects-page.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsPageComponent,
    CreatePageComponent,
    MyProjectsPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    ProjectsFeaturesModule,
    HttpClientModule,
    FormsModule,
    UserModule
  ],
  providers: [
    CookieService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
