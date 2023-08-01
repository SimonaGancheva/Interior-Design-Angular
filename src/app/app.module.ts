import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ExploreWorkComponent } from './explore-work/explore-work.component';
import { WhatsTrendingComponent } from './whats-trending/whats-trending.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';
import { InteriorDesignInfoComponent } from './interior-design-info/interior-design-info.component';
import { WhatTheySayComponent } from './what-they-say/what-they-say.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactPageMapComponent } from './contact-page-map/contact-page-map.component';
import { ContactPageFormComponent } from './contact-page-form/contact-page-form.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ExploreItemComponent } from './explore-item/explore-item.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    SearchFormComponent,
    ExploreWorkComponent,
    WhatsTrendingComponent,
    ContactUsComponent,
    HomePageComponent,
    ServicesComponent,
    InteriorDesignInfoComponent,
    WhatTheySayComponent,
    ContactPageComponent,
    ContactPageMapComponent,
    ContactPageFormComponent,
    CallToActionComponent,
    PageBannerComponent,
    AboutPageComponent,
    ExplorePageComponent,
    ExploreItemComponent,
    ProfilePageComponent,
    CreateProjectPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    NgbModule,
    UserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
