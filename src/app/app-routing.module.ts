import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppAddPatientComponent } from './components/main-app/main-app-layout/main-app-add-patient/main-app-add-patient.component';
import { MainAppDashboardComponent } from './components/main-app/main-app-layout/main-app-dashboard/main-app-dashboard.component';
import { MainAppLayoutComponent } from './components/main-app/main-app-layout/main-app-layout.component';
import { MainAppMyPatientDataComponent } from './components/main-app/main-app-layout/main-app-my-patient-data/main-app-my-patient-data.component';
import { MainAppMyPatientsComponent } from './components/main-app/main-app-layout/main-app-my-patients/main-app-my-patients.component';
import { MainAppMyProfileComponent } from './components/main-app/main-app-layout/main-app-my-profile/main-app-my-profile.component';
import { SiteAppLayoutComponent } from './components/site-app/site-app-layout/site-app-layout.component';
import { SiteAppSigninComponent } from './components/site-app/site-app-layout/site-app-signin/site-app-signin.component';
import { SiteAppSignupComponent } from './components/site-app/site-app-layout/site-app-signup/site-app-signup.component';


const routes: Routes = [

  // site layout
  {
    path:'',
    component: SiteAppLayoutComponent,
    children: [
      {
        path:'',
        component: SiteAppSigninComponent,
        pathMatch: 'full'
      },
      {
        path: 'signup',
        component: SiteAppSignupComponent,
        pathMatch: 'full'
      }
    ]
  },

  // app layout
  {
    path: '',
    component:MainAppLayoutComponent,
    children: [
      {path: '', component: MainAppDashboardComponent},
      {path: 'dashboard', component: MainAppDashboardComponent},
      {path: 'patients', component: MainAppMyPatientsComponent},
      {path: 'add-patient', component: MainAppAddPatientComponent},
      {path: 'edit/:postId', component: MainAppAddPatientComponent},
      {path: 'my-patient/:postId', component: MainAppMyPatientDataComponent},
      {path: 'my-profile', component: MainAppMyProfileComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
