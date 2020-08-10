import { Component, OnInit } from '@angular/core';
import {MaterialService} from '../../services/material.service';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private _material:MaterialService,
              private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
async login( form: NgForm ) {
  try{
    const user= await this.auth.login(this.usuario);
      if(user && user.user.emailVerified){
        this.router.navigate(['/menu']);
      }else if(user){
        this.router.navigate(['/emailverification']);
      }else{
        this.router.navigate(['/registro']);
      }

  }catch(err){
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
    }catch(err){
      console.log(err)
    }
  }

}
