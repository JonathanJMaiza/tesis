import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import {ReactiveFormsModule} from '@angular/forms';
//Servicios

=======
import { PagesModule } from './pages/pages.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {ReactiveFormsModule} from '@angular/forms';
//Servicios
import { MaterialService } from './services/material.service';
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { AdminModule } from './admin/admin.module';
//import { NgImagenDirective } from './directive/ng-imagen.directive';

=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472




@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
  //  NgImagenDirective,

=======
    AppComponent
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
<<<<<<< HEAD
    AdminModule,
    AuthModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    

  ],
  providers: [
    {provide: BUCKET, useValue:'gs://noticias-esfot.appspot.com'}

=======
    AuthModule,
    PagesModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule

  ],
  providers: [
    MaterialService
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
