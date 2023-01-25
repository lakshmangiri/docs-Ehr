import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppAddPatientComponent } from './components/main-app/main-app-layout/main-app-add-patient/main-app-add-patient.component';
import { MainAppLayoutComponent } from './components/main-app/main-app-layout/main-app-layout.component';
import { MainAppMyDashboardComponent } from './components/main-app/main-app-layout/main-app-my-dashboard/main-app-my-dashboard.component';
import { MainAppMyPatientDataComponent } from './components/main-app/main-app-layout/main-app-my-patient-data/main-app-my-patient-data.component';
import { MainAppMyPatientsComponent } from './components/main-app/main-app-layout/main-app-my-patients/main-app-my-patients.component';
import { MainAppMyProfileComponent } from './components/main-app/main-app-layout/main-app-my-profile/main-app-my-profile.component';
import { SiteAppLayoutComponent } from './components/site-app/site-app-layout/site-app-layout.component';
import { SiteAppSigninComponent } from './components/site-app/site-app-layout/site-app-signin/site-app-signin.component';
import { SiteAppSignupComponent } from './components/site-app/site-app-layout/site-app-signup/site-app-signup.component';

const routes: Routes = [
  // site-app layout
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
    // main-app layout
    {
      path: '',
      component:MainAppLayoutComponent,
      children: [
        {path: '', component: MainAppMyDashboardComponent},
        {path: 'dashboard', component: MainAppMyDashboardComponent},
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
