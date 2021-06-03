import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppLayoutComponent } from './components/main-app/main-app-layout/main-app-layout.component';
import { SiteAppLayoutComponent } from './components/site-app/site-app-layout/site-app-layout.component';
import { SiteAppSigninComponent } from './components/site-app/site-app-layout/site-app-signin/site-app-signin.component';
import { SiteAppSignupComponent } from './components/site-app/site-app-layout/site-app-signup/site-app-signup.component';
import { MaterialModule } from './module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainAppDashboardComponent } from './components/main-app/main-app-layout/main-app-dashboard/main-app-dashboard.component';
import { MainAppAddPatientComponent } from './components/main-app/main-app-layout/main-app-add-patient/main-app-add-patient.component';
import { CommonSideNavComponent } from './components/common/common-side-nav/common-side-nav.component';
import { CommonHeaderComponent } from './components/common/common-header/common-header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainAppLayoutComponent,
    SiteAppLayoutComponent,
    SiteAppSigninComponent,
    SiteAppSignupComponent,
    MainAppDashboardComponent,
    MainAppAddPatientComponent,
    CommonSideNavComponent,
    CommonHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
