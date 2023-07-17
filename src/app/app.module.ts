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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { InteriorDesignInfoComponent } from './interior-design-info/interior-design-info.component';
import { WhatTheySayComponent } from './what-they-say/what-they-say.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactPageMapComponent } from './contact-page-map/contact-page-map.component';
import { ContactPageFormComponent } from './contact-page-form/contact-page-form.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { PageBannerComponent } from './page-banner/page-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    SearchFormComponent,
    ExploreWorkComponent,
    WhatsTrendingComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    InteriorDesignInfoComponent,
    WhatTheySayComponent,
    ContactPageComponent,
    ContactPageMapComponent,
    ContactPageFormComponent,
    CallToActionComponent,
    PageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
