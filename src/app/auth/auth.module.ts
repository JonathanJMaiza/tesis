import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ClaveComponent } from './clave/clave.component';
<<<<<<< HEAD
=======
import { MaterialService } from '../services/material.service';
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from './../app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmailverificationComponent } from './emailverification/emailverification.component'
<<<<<<< HEAD
import { AdminModule } from '../admin/admin.module';
=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472

@NgModule({
  declarations: [LoginComponent, RegistroComponent, ClaveComponent, EmailverificationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    AdminModule,

=======
    ReactiveFormsModule
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472

  ],
  exports:[
    LoginComponent,
    RegistroComponent,
    ClaveComponent
  ],
  providers:[
<<<<<<< HEAD
    
=======
    MaterialService
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  ]
})
export class AuthModule { }
