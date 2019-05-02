import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

// import { Observable}  from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { geoLocations } from 'src/app/locations';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  text: string = 'Omaha Burger Map';
  lat: number = 41.2565;
  lng: number = -95.9345;
  zoom: number = 14;

  burgers: geoLocations[];

  constructor( private mapService: MapService ) { 
    
    this.mapService.getLocations().subscribe(res =>{
      console.log(res);
      this.burgers = res;
    })
    
  }

  ngOnInit() {

  


  }

}
