import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageFormComponent } from './contact-page-form/contact-page-form.component';
import { ContactPageMapComponent } from './contact-page-map/contact-page-map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactPageFormComponent,
    ContactPageMapComponent,
    ContactUsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ContactPageFormComponent,
    ContactPageMapComponent,
    ContactUsComponent,
  ],
})
export class ContactFeatureModule {}
