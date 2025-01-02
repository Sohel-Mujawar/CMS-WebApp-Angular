import {  Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path:'',component:HomepageComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'signup',component:SignupComponent
    },
];
    