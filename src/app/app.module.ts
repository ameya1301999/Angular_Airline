import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowFlightsComponent } from './show-flights/show-flights.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FormsModule } from '@angular/forms';
import { SqrtPipe } from './sqrt.pipe';
import { ButtonComponent } from './button/button.component';
import { HometComponent } from './homet/homet.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowFlightsComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    SqrtPipe,
    ButtonComponent,
    HometComponent,
    UserDashboardComponent,
    PageNotFoundComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
