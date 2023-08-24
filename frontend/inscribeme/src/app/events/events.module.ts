import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonaddeventComponent } from './components/buttonaddevent/buttonaddevent.component';
import { DeleteeventComponent } from './components/deleteevent/deleteevent.component';
import { DetailscardsComponent } from './components/detailscards/detailscards.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { EditeventComponent } from './components/editevent/editevent.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomecardsComponent } from './components/homecards/homecards.component';
import { JoinComponent } from './components/join/join.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModaladdeventComponent } from './components/modaladdevent/modaladdevent.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProfilecardsComponent } from './components/profilecards/profilecards.component';
import { SliderComponent } from './components/slider/slider.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { EventsRoutingModule } from './events-routing.module';
import { ProfileComponent } from './views/profile/profile.component';


@NgModule({
  declarations: [
    ButtonaddeventComponent,
    DeleteeventComponent,
    DetailscardsComponent,
    DictionaryComponent,
    EditeventComponent,
    FavoritesComponent,
    HomecardsComponent,
    JoinComponent,
    LoginformComponent,
    LogoutComponent,
    ModaladdeventComponent,
    PaginationComponent,
    ProfilecardsComponent,
    SliderComponent,
    UserdetailsComponent,
    HomeComponent,
    DetailsComponent,
    ProfileComponent
     ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
