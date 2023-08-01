import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PageBannerComponent, MainBannerComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [PageBannerComponent, MainBannerComponent],

})
export class BannerFeatureModule { }
