import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  text: string = 'Omaha Burger Map';
  lat: number = 41.2565;
  lng: number = -95.9345;
  zoom: number = 12;

  markers = [
    { lat: 41.257430, long: -95.937769 },
    { lat: 41.236684, long: -95.954771}
    ];


  constructor() { }

  ngOnInit() {

  


  }

}
