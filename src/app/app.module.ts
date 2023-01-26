import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainAppLayoutComponent } from './components/main-app/main-app-layout/main-app-layout.component';
import { SiteAppLayoutComponent } from './components/site-app/site-app-layout/site-app-layout.component';
import { NavToolBarComponent } from './components/common/nav-tool-bar/nav-tool-bar.component';
import { SiteAppSigninComponent } from './components/site-app/site-app-layout/site-app-signin/site-app-signin.component';
import { SiteAppSignupComponent } from './components/site-app/site-app-layout/site-app-signup/site-app-signup.component';
import { MaterialModule } from './module/material/material.module';
import { FormsModule } from '@angular/forms';
import { MainAppMyDashboardComponent } from './components/main-app/main-app-layout/main-app-my-dashboard/main-app-my-dashboard.component';
import { MainAppMyPatientsComponent } from './components/main-app/main-app-layout/main-app-my-patients/main-app-my-patients.component';
import { MainAppMyPatientDataComponent } from './components/main-app/main-app-layout/main-app-my-patient-data/main-app-my-patient-data.component';
import { MainAppMyProfileComponent } from './components/main-app/main-app-layout/main-app-my-profile/main-app-my-profile.component';
import { MainAppAddPatientComponent } from './components/main-app/main-app-layout/main-app-add-patient/main-app-add-patient.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainAppLayoutComponent,
    SiteAppLayoutComponent,
    NavToolBarComponent,
    SiteAppSigninComponent,
    SiteAppSignupComponent,
    MainAppMyDashboardComponent,
    MainAppMyPatientsComponent,
    MainAppMyPatientDataComponent,
    MainAppMyProfileComponent,
    MainAppAddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
