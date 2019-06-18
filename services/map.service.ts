import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { geoLocations } from '../locations';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root' 
})
export class MapService {

  geoCollection: AngularFirestoreCollection<geoLocations>
  locations: Observable<any>;


  constructor( private afs: AngularFirestore ) {

    this.geoCollection = this.afs.collection('locations');

    this.locations = this.afs.collection('locations').valueChanges();

  }

  getLocations(){
    return this.locations
  }

  addBurger(burger: geoLocations){
    console.log(burger)
    this.geoCollection.add(burger);
  }
}
