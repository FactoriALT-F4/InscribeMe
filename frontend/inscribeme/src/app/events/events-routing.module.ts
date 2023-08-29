import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { HomeadminComponent } from './views/homeadmin/homeadmin.component';
import { ProfileComponent } from './views/profile/profile.component';
import { DetailsadminComponent } from './views/detailsadmin/detailsadmin.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'homeadmin', component: HomeadminComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'detailsadmin/:id', component: DetailsadminComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
