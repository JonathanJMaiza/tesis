import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';


=======
import {MaterialService} from '../../services/material.service';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  hide = false;
  mensaje=false;
  errorUser=false;
  usuario: Usuario = new Usuario();
  usuarioparse:Usuario=new Usuario();
  constructor(
=======
  hide = true;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private _material:MaterialService,
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
              private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
async login( form: NgForm ) {
<<<<<<< HEAD
  if(form.invalid){
    Object.values(form.controls).forEach(control=>{
        console.log(control);
        control.markAsTouched();
      })
      return
    }

  try{
    const user= await this.auth.login(this.usuario);
      if(user && user.user.emailVerified){
        this.auth.getUser(user.user.uid).subscribe(
          resp=>{
              console.log(resp +'paso 1');
              if(resp===null){
                this.auth.borrarCuenta();
                this.errorUser=true;
                console.log('da el undefine no hay usuaio')
              }else{
                  this.tipodeUsuario(resp);
              }
            /*
              if(resp.estado=='eliminado'){

                this.auth.borrarCuenta();
                this.auth.borrarUsuerio(resp.uid);
              }else{

              }
            //
            */
          }
        );

      }else if(user){
        this.auth.getUser(user.user.uid).subscribe(
          resp=>{
            console.log(resp +'paso 1');
            if(resp===null){
              console.log('da el undefine no hay usuaio');
              this.auth.borrarCuenta();
              this.errorUser=true;
            }else{
                this.tipodeUsuario(resp);
            }            /*
              if(resp.estado=='eliminado'){
                this.auth.borrarCuenta();
                this.auth.borrarUsuerio(resp.uid);
              }else{
                this.router.navigate(['/emailverification']);
              }
              */
          }
        )
=======
  try{
    const user= await this.auth.login(this.usuario);
      if(user && user.user.emailVerified){
        this.router.navigate(['/menu']);
      }else if(user){
        this.router.navigate(['/emailverification']);
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
      }else{
        this.router.navigate(['/registro']);
      }

  }catch(err){
<<<<<<< HEAD

    if(err=="Error: The password is invalid or the user does not have a password."){
        this.mensaje=true;
    }else if(err="Error: Too many unsuccessful login attempts. Please try again later."){
      console.log(err+'entra al error');
      this.auth.ingreso(this.usuario.email, this.usuario.password).subscribe(resp=>
        {
            console.log(resp);
            if(resp.length!=0){
              this.usuarioparse=resp[0];
              this.auth.borrarUsuerio(this.usuarioparse.uid);
              this.auth.register(this.usuarioparse);
              console.log(this,this.usuarioparse);
            }else{
              this.errorUser=true;
            }

            /*
            if(resp.length!=0){

            }
            */
        });
    }
    console.log(err+'erwdfsafg');

  }

  }
  async loginGoogle(){
    try{
        const user= await this.auth.loginGoogle();
        this.usuario.email=user.user.email;
        this.usuario.nombre=user.user.displayName;
        this.usuario.uid=user.user.uid;
        this.usuario.photoURL=user.user.photoURL;
        //this.usuario.password=user.user.

      if(user){
        this.auth.registrar_usurios_g_f(this.usuario);
        this.auth.getUser(user.user.uid).subscribe(
          resp=>{
            console.log('si entra')
            this.tipodeUsuario(resp);
          }
        )
      }
    }catch(err){

      console.log(err +'asi pasa')
    }
  }

  async loginFacebook(){
    try{
      const user= await this.auth.loginFacebook();
      this.usuario.email=user.user.email;
      this.usuario.nombre=user.user.displayName;
      this.usuario.uid=user.user.uid;
      console.log(user.user.providerId);
      this.auth.registrar_usurios_g_f(this.usuario);
      if(user){
        this.auth.getUser(user.user.uid).subscribe(
          resp=>{
            this.tipodeUsuario(resp);
          }
        )
      }
=======
    console.log(err);
  }

  }
  loginGoogle(){
    try{
      this.auth.loginGoogle();
    }catch(err){
      console.log(err)
    }
  }

  loginFacebook(){
    try{
      this.auth.loginFacebook();
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
    }catch(err){
      console.log(err)
    }
  }

<<<<<<< HEAD
  tipodeUsuario(usuario:Usuario){
    //firstLogin
    if(usuario.rol=="administrador"){
      this.router.navigate(['/admin']);
    }else if(usuario.rol=="secretaria"){
      this.router.navigate(['/secre']);
    }else if(usuario.rol=="docente"){
      this.router.navigate(['/docente']);
    }else if(usuario.rol=="aeesfot"){
      this.router.navigate(['/aeesfot']);
    }if(usuario.rol=="estudiante"){
      this.router.navigate(['/estudiante']);
    }else{

    }
  }

=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
}
