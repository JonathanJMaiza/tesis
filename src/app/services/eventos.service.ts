import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Eventos } from '../models/eventos.modelo';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private db:AngularFirestore) { }

  crearEvento(evento: Eventos){
    const eventData = {
      ...evento,
    }

    this.db.doc(`usuarios`).set({
      
    })
  }

}
