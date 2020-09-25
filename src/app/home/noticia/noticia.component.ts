import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cabecera } from 'src/app/models/cabecera';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
@Input() cabecera:Cabecera;
@Input()  index:number;
@Output() cabeceraSeleccionada:EventEmitter<number>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cabecera.imagen_cabecera[0].url)
  }

}
