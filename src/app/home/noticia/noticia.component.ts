<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cabecera } from 'src/app/models/cabecera';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
<<<<<<< HEAD
@Input() cabecera:Cabecera;
@Input()  index:number;
@Output() cabeceraSeleccionada:EventEmitter<number>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cabecera.imagen_cabecera[0].url)
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  }

}
