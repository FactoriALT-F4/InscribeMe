import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonloginComponent } from './components/buttonlogin/buttonlogin.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserloggedComponent } from './components/userlogged/userlogged.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FormsUserRoutingModule } from './forms-user-routing.module';

@NgModule({
  declarations: [
    ButtonloginComponent,
    SigninComponent,
    SignupComponent,
    UserloggedComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsUserRoutingModule
  ]
})
export class FormsUserModule { }
