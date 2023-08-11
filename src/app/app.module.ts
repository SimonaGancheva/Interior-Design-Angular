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
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CreatePageComponent } from './projects-features/create-page/create-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, CreatePageComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    ProjectsFeaturesModule,
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
