import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreItemComponent } from './explore-item/explore-item.component';
import { ExploreWorkComponent } from './explore-work/explore-work.component';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@NgModule({
  declarations: [ExploreItemComponent, ExploreWorkComponent],
  imports: [CommonModule, RouterModule],
  exports: [ExploreItemComponent, ExploreWorkComponent],
})
export class ExploreFeaturesModule {}
