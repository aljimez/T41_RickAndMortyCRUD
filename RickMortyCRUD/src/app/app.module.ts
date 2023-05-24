import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CharacByIdComponent } from './components/charac-by-id/charac-by-id.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { CreateCharacComponent } from './components/create-charac/create-charac.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PersonajesComponent,
    CharacByIdComponent,
    HomeComponent,
    CreateCharacComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
