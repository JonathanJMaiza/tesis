import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ClaveComponent } from './clave/clave.component';
import { MaterialService } from '../services/material.service';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from './../app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmailverificationComponent } from './emailverification/emailverification.component'

@NgModule({
  declarations: [LoginComponent, RegistroComponent, ClaveComponent, EmailverificationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    LoginComponent,
    RegistroComponent,
    ClaveComponent
  ],
  providers:[
    MaterialService
  ]
})
export class AuthModule { }
