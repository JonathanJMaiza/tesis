import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  passwordsIguales(pass1Name:string, pass2Name:string){
  // se ejecuta esto del lado del componete qu tiene el formulario
  //por eso jalara un formgrup tendra todos lo que exista en form
  //con las const vamos pasar los elementos del group especificos
  //comparamos y modificaremos de los controls el error cambiando el valor a null
  //y si no es igual dara el tipo de error y que existe un error
   return (formGroup:FormGroup)=>{
     const pass1Control=formGroup.controls[pass1Name];
     const pass2Control=formGroup.controls[pass2Name];
     if (pass1Control.value === pass2Control.value){
       pass2Control.setErrors(null);
     }else{
       pass2Control.setErrors({noEsIgual:true});
     }
   }
}
    

}
