import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GuardiansComponent } from './core/guardians/guardians.component';
import { EventsModule } from './events/events.module';
import { FormsUserModule } from './forms-user/forms-user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GuardiansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EventsModule,
    FormsUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }