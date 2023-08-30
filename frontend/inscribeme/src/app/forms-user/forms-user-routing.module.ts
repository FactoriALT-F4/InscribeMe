import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserloggedComponent } from './components/userlogged/userlogged.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'users', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manolo', component: UserloggedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsUserRoutingModule { }
