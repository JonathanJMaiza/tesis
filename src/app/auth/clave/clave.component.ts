import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
=======

>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
@Component({
  selector: 'app-clave',
  templateUrl: './clave.component.html',
  styleUrls: ['./clave.component.css']
})
export class ClaveComponent implements OnInit {
<<<<<<< HEAD
    usuario: Usuario = new Usuario();
    mensaje=false;
=======
email= new FormControl('');
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
  async ResetPass(form: NgForm){

    try{

      if(form.invalid){
        console.log('entro')
        Object.values(form.controls).forEach(control=>{
            console.log(control);
            control.markAsTouched();
          })
          return;
      }

       await this.auth.resetPass(this.usuario.email)

      //this.router.navigate(["/login"]);
    }catch(err){
      this.mensaje=true;
=======
  async ResetPass(){
    try{
      const emailuser=this.email.value;
      this.auth.resetPass(emailuser);
      this.router.navigate(["/login"]);
    }catch(err){
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
      console.log(err)
    }

  }
<<<<<<< HEAD
  regresar(){
    this.router.navigate(["/login"]);
  }
=======

>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
}
