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
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { TenderfilesComponent } from './common/tenderfiles/tenderfiles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenderComponent } from './common/tender/tender.component';
import { GreivanceregistrationComponent } from './common/greivanceregistration/greivanceregistration.component';
import { BookingComponent } from './common/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    SiteclearanceComponent,
    TimberfirewoodComponent,
    CareerComponent,
    ContactUsComponent,
    TenderfilesComponent,
    TenderComponent,
    GreivanceregistrationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
