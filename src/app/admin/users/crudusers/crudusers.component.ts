import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidadoresService } from 'src/app/services/validadores.service';
@Component({
  selector: 'app-crudusers',
  templateUrl: './crudusers.component.html',
  styleUrls: ['./crudusers.component.css']
})
export class CrudusersComponent implements OnInit {
  checked = false;
  entra=false;
  color=false;
  hide = false;
  modificar=false;
  d= new Date();
  forma: FormGroup;
  usuario: Usuario = new Usuario();
  constructor(private auth:AuthService,private fb:FormBuilder,
              private router:Router,
            private validaciones:ValidadoresService,
          private activatedRoute:ActivatedRoute) {


            this.crearFormulario()
          this.activatedRoute.params.subscribe(params=>{
            if(params['id']!=undefined){
              this.modificar=true;
              console.log('va ha modificar');

              this.auth.getUser(params['id']).subscribe(
                 resp=>{
                  this.usuario=resp;
                  var d =parseInt(this.usuario.fechanacimiento['seconds']);
                  console.log(d);
                  var s = new Date(d*1000);
                  this.usuario.fechanacimiento=s;
                  console.log(s)
                  //console.log(Date(this.usuario.fechanacimiento['seconds']));
              }
            )
            }
          })
//console.log(this.usuario.fechanacimiento+'fecha');

          }

  ngOnInit(): void {
  }
  get nombreNoValido(){
  return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get apellidoNoValido(){
  return this.forma.get('nombre').invalid && this.forma.get('apellido').touched
  }
  get emailNoValido(){
  return this.forma.get('email').invalid && this.forma.get('email').touched
  }
  get generoNoValido(){
  return this.forma.get('genero').invalid && this.forma.get('genero').touched
  }
  get fechanacimientoNoValido(){
  return this.forma.get('fechanacimiento').invalid && this.forma.get('fechanacimiento').touched
  }
  get   passwordNoValido(){
  return this.forma.get('password').invalid && this.forma.get('password').touched
  }
  get   rolNoValido(){
  return this.forma.get('rol').invalid && this.forma.get('rol').touched
  }
  get   usuario_verificado(){
  return this.forma.get('usuario_verificado').invalid && this.forma.get('usuario_verificado').touched
  }


  get password1Novalido(){
      const password=this.forma.get('password').value;
      const password1=this.forma.get('password1').value;
      return (password==password1)? false: true;
  }

  crearFormulario(){
    this.forma=this.fb.group({
      //nombre  :['valor','validadores sincronos','validadrores asincronos'],
      nombre  :['',[Validators.required, Validators.minLength(5)] ],
      apellido:['',[Validators.required]],
      email  :['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      genero: ['',Validators.required],
      //carrera: ['',Validators.required],
      fechanacimiento:['',[Validators.required]],
      rol:['',Validators.required],
      usuario_verificado:['',Validators.required],
      password   :['',[Validators.required, Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      password1  :['', [Validators.required]],
   },
  {
    validators: this.validaciones.passwordsIguales('password','password1'),
  }
 );}
 async register(forma:FormGroup){



  if(this.forma.invalid){
    console.log('entra');

    return Object.values(this.forma.controls).forEach(control=>{
      if (control instanceof FormGroup){
        Object.values(control.controls).forEach(control=>control.markAsTouched()) ;
        }else{
          control.markAsTouched();
        }
      });

    }else{
      try{

        console.log(this.usuario.fechanacimiento )
        /*
          if(this.usuario.rol==="docente"||this.usuario.rol==="secretaria"){
            this.usuario.usuario_verificado=false;
          }
          */
          const user= await this.auth.register(this.usuario);
          if(user){
            //this.router.navigate['/emailverification']
            this.entra=true;
          }
      }catch(err){
          if(err.code=="auth/email-already-in-use"){
            this.checked=true;
            console.log('entra aqui el error');
          }
        console.log(err);
      }

      if(this.entra){
        console.log('si entra');

          //const prueba=this.auth.sendVerificationEmail().then().catch(err=>{console.log(err+'error')})
      }
    }

   console.log(this.usuario.rol);
   /*

*/
 }
cargarData(){

 this.forma.reset({
   "nombre": this.usuario.nombre,
   "apellido": this.usuario.apellido,
   "email": this.usuario.email,
 });
}
imprimirDatos(){
  console.log("si entra")
  console.log(this.usuario.fechanacimiento);
}

fecha(user:Usuario){

}
}
