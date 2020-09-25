import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CargarCabeceraService } from 'src/app/services/cargar-cabecera.service';
import { Cabecera } from 'src/app/models/cabecera';
=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
<<<<<<< HEAD
   cabeceras:Cabecera[];
  constructor(private _carga: CargarCabeceraService ) { }

  ngOnInit(): void {
    this._carga.getCabeceras().subscribe(resp=>{
    this.cabeceras=resp;
    });
  }

cargarInfo(){

}

=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
}
