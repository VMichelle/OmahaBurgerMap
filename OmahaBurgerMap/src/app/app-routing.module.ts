import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'map', component: GoogleMapComponent },
  {path: '**' , redirectTo: '/map' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
