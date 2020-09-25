import { Component, OnInit } from '@angular/core';
import { CargarCabeceraService } from 'src/app/services/cargar-cabecera.service';
import { Cabecera } from 'src/app/models/cabecera';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
   cabeceras:Cabecera[];
  constructor(private _carga: CargarCabeceraService ) { }

  ngOnInit(): void {
    this._carga.getCabeceras().subscribe(resp=>{
    this.cabeceras=resp;
    });
  }

cargarInfo(){

}

}
