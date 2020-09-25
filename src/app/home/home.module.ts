import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [NoticiasComponent, NoticiaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NoticiaComponent,
    NoticiasComponent
  ]
})
export class HomeModule { }
