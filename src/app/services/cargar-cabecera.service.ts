import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cabecera } from '../models/cabecera';

//import * as firebase from 'firebase';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class CargarCabeceraService {

  constructor(private db: AngularFirestore) { }

  getCabeceras(){
    return this.db.collection('cabecera', ref=>{
      return ref
      .orderBy('fecha_pub_cabecera','desc')
    }).snapshotChanges().pipe(map(resp=>resp.map(a=>{
      const data= a.payload.doc.data() as Cabecera;
      const  id = a.payload.doc.id;
      return { id, ...data};
    })
    ))
  }


}
