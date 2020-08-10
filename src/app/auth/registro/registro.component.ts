import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private auth:AuthService,private fb:FormBuilder,
              private router:Router) {
    this.crearFormulario()
   }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.forma=this.fb.group({
      //nombre  :['valor','validadores sincronos','validadrores asincronos'],
      nombre  :['',[Validators.required, Validators.minLength(5)] ],
      apellido:['',[Validators.required]],
      email  :['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      genero: ['',Validators.required],
      carrera: ['',Validators.required],
      fechanacimiento:['',[Validators.required]],
      password   :['',Validators.required],
      password1   :['', Validators.required],


   });}



 async register(forma:FormGroup){
   try{
       const user= await this.auth.register(this.usuario);
       if(user){
         this.router.navigate['/emailverification']
       }
   }catch(err){
     console.log(err);
   }

 }
}
