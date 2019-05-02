import { Component, OnInit } from '@angular/core';
import { geoLocations } from 'src/app/locations';
import { MapService } from 'src/app/services/map.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.component.html',
  styleUrls: ['./add-burger.component.scss']
})
export class AddBurgerComponent implements OnInit {

  burger: geoLocations = {
    latitude: 0,
    longitude: 0,
    name: '',
    image: '',
    description: '',
    burgerName: ''
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor( private addService: MapService ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.addService.addBurger(this.burger);
    this.burger.latitude= 0;
    this.burger.longitude= 0;
    this.burger.name= '';
    this.burger.image= '';
    this.burger.description= '';
    this.burger.burgerName= '';
  }


}
