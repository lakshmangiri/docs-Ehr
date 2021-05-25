import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppAddPatientComponent } from './components/main-app/main-app-layout/main-app-add-patient/main-app-add-patient.component';
import { MainAppDashboardComponent } from './components/main-app/main-app-layout/main-app-dashboard/main-app-dashboard.component';
import { MainAppLayoutComponent } from './components/main-app/main-app-layout/main-app-layout.component';
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
      {path: 'add-patient', component: MainAppAddPatientComponent},
      {path: 'edit/:postId', component: MainAppAddPatientComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
