import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { geoLocations } from 'src/app/locations';


@Component({
  selector: 'app-right-col',
  templateUrl: './right-col.component.html',
  styleUrls: ['./right-col.component.scss']
})
export class RightColComponent implements OnInit {

  burgers: geoLocations[];

  constructor( private mapService: MapService ) {
    
    this.mapService.getLocations().subscribe(res =>{
      console.log(res);
      this.burgers = res;
    })
}

  ngOnInit() {}

}

