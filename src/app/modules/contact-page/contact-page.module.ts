import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageService } from './services/contact-page.service';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ],
  exports: [
    ContactPageComponent
  ],
  providers: [
    ContactPageService
  ]
})
export class ContactPageModule { }
