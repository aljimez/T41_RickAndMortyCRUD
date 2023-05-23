import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CharacByIdComponent } from './components/charac-by-id/charac-by-id.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characbyid',component: CharacByIdComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
