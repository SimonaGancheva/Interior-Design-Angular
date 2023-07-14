import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ExploreWorkComponent } from './explore-work/explore-work.component';
import { WhatsTrendingComponent } from './whats-trending/whats-trending.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainBannerComponent,
    SearchFormComponent,
    ExploreWorkComponent,
    WhatsTrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
