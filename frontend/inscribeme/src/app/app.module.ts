import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SliderComponent } from './events/slider/slider.component';
import { PaginationComponent } from './events/pagination/pagination.component';
import { FavoritesComponent } from './events/favorites/favorites.component';
import { JoinComponent } from './events/join/join.component';
import { LoginComponent } from './login/views/login/login.component';
import { RegisterComponent } from './login/views/register/register.component';
import { SigninComponent } from './login/components/signin/signin.component';
import { SignupComponent } from './login/components/signup/signup.component';
import { ProfilecardsComponent } from './events/profilecards/profilecards.component';
import { DetailscardsComponent } from './events/detailscards/detailscards.component';
import { HomecardsComponent } from './events/homecards/homecards.component';
import { ButtonaddeventComponent } from './events/buttonaddevent/buttonaddevent.component';
import { ModaladdeventComponent } from './events/modaladdevent/modaladdevent.component';
import { EditeventComponent } from './events/editevent/editevent.component';
import { DeleteeventComponent } from './events/deleteevent/deleteevent.component';
import { UserdetailsComponent } from './events/userdetails/userdetails.component';
import { LogoutComponent } from './events/logout/logout.component';
import { ButtonloginComponent } from './login/components/buttonlogin/buttonlogin.component';
import { UserloggedComponent } from './login/components/userlogged/userlogged.component';
import { DictionaryComponent } from './events/dictionary/dictionary.component';
import { LoginformComponent } from './events/loginform/loginform.component';
import { RegisterformComponent } from './events/registerform/registerform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    ProfileComponent,
    SliderComponent,
    PaginationComponent,
    FavoritesComponent,
    JoinComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent,
    ProfilecardsComponent,
    DetailscardsComponent,
    HomecardsComponent,
    ButtonaddeventComponent,
    ModaladdeventComponent,
    EditeventComponent,
    DeleteeventComponent,
    UserdetailsComponent,
    LogoutComponent,
    ButtonloginComponent,
    UserloggedComponent,
    DictionaryComponent,
    LoginformComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
