import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HometComponent } from './homet/homet.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ShowFlightsComponent } from './show-flights/show-flights.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

// const routes: Routes = [
//   {path: '**',component: PageNotFoundComponent}, 
//   {path: '',redirectTo:'home',pathMatch:'full'}, 
//   {path: 'home',component: HometComponent, 
//       children: [
//           {path: 'showFlights',component:ShowFlightsComponent},
//           {path: 'register',component:RegistrationComponent},
//           {path: 'login',component:LoginComponent,
//             children: [
//               {path: 'dashboard', component:UserDashboardComponent},
//               {path: 'forgot',component:ForgotpasswordComponent,
//                 children: [
//                   {path: 'reset',component:ForgotpasswordComponent},
//                 ]
//               },
//             ]
//           },
//       ]
//   },
// ];

const routes: Routes = [
  { path: 'homet', component: HometComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path : 'register', component: RegistrationComponent },
  { path : 'showflights', component: ShowFlightsComponent },
  { path : 'login', component: LoginComponent,
    children: [
      { path : 'forgotpassword', component: ForgotpasswordComponent},
      { path : 'resetpassword', component: ResetpasswordComponent}
    ]
  },
  { path: 'dashboard', component: UserDashboardComponent},
  //{ path: 'forgotpassword', component: ForgotpasswordComponent},
  //{ path:'resetpassword', component: ResetpasswordComponent},
  { path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
