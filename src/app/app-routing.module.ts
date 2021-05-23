import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
