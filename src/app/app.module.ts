import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SiteclearanceComponent } from './common/siteclearance/siteclearance.component';
import { TimberfirewoodComponent } from './common/timberfirewood/timberfirewood.component';
import { RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    SiteclearanceComponent,
    TimberfirewoodComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
