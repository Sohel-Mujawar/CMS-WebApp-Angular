import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    SignupComponent
  ],
  exports:[LoginComponent, SignupComponent]
})
export class UserAuthModule { }
