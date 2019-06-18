import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AddBurgerComponent } from './components/add-burger/add-burger.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'map', component: GoogleMapComponent },
  {path: 'add', component: AddBurgerComponent },
  {path: '**' , redirectTo: '/map' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
