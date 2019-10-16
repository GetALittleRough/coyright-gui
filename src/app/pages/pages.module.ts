import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    NbMenuModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    HomepageComponent
  ]
})

export class PagesModule {

}