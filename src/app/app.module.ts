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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowFlightsComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    SqrtPipe
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
