import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import {ReactiveFormsModule} from '@angular/forms';
//Servicios

//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
//import { NgImagenDirective } from './directive/ng-imagen.directive';





@NgModule({
  declarations: [
    AppComponent,
  //  NgImagenDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
