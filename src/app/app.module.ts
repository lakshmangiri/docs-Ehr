import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppLayoutComponent } from './components/main-app/main-app-layout/main-app-layout.component';
import { SiteAppLayoutComponent } from './components/site-app/site-app-layout/site-app-layout.component';
import { SiteAppSigninComponent } from './components/site-app/site-app-layout/site-app-signin/site-app-signin.component';
import { SiteAppSignupComponent } from './components/site-app/site-app-layout/site-app-signup/site-app-signup.component';
import { MaterialModule } from './module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainAppAddPatientComponent } from './components/main-app/main-app-layout/main-app-add-patient/main-app-add-patient.component';
import { AuthInterceptor } from './service/userAuthService/auth-interceptor';
import { NavToolBarComponent } from './components/common/nav-tool-bar/nav-tool-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainAppDashboardComponent } from './components/main-app/main-app-layout/main-app-dashboard/main-app-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MainAppMyPatientsComponent } from './components/main-app/main-app-layout/main-app-my-patients/main-app-my-patients.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MainAppMyProfileComponent } from './components/main-app/main-app-layout/main-app-my-profile/main-app-my-profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MainAppMyPatientDataComponent } from './components/main-app/main-app-layout/main-app-my-patient-data/main-app-my-patient-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppLayoutComponent,
    SiteAppLayoutComponent,
    SiteAppSigninComponent,
    SiteAppSignupComponent,
    MainAppAddPatientComponent,
    NavToolBarComponent,
    MainAppDashboardComponent,
    MainAppMyPatientsComponent,
    MainAppMyProfileComponent,
    MainAppMyPatientDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
