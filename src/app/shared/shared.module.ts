import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import {MaterialModule} from './../material.module';
import {AppRoutingModule} from './../app-routing.module'
import { HomeModule } from '../home/home.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FirstLoginComponent } from './first-login/first-login.component';
import { PipeModule } from '../pipes/pipe.module';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { NgImagenDirective } from './directive/ng-imagen.directive';
import { NgDocumentoDirective } from './directive/ng-documento.directive';
import { DocumentosComponent } from './documentos/documentos.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player'



@NgModule({
  declarations: [MenuComponent, CalendarComponent,
    SidenavComponent, FirstLoginComponent,
    ImagenesComponent, NgImagenDirective, NgDocumentoDirective, DocumentosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    PipeModule,
    HomeModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    MenuComponent,
    CalendarComponent,
    SidenavComponent,
    ImagenesComponent,
    DocumentosComponent ,
    YouTubePlayerModule

  ]
})
export class SharedModule { }
