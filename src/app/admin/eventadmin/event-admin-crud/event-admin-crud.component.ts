import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Eventos } from 'src/app/models/eventos.modelo';

@Component({
  selector: 'app-event-admin-crud',
  templateUrl: './event-admin-crud.component.html',
  styleUrls: ['./event-admin-crud.component.css']
})
export class EventAdminCrudComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  forma: FormGroup;
  eventos: Eventos = new Eventos();
  constructor(private fb:FormBuilder) {
      this.crearFormulario()
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
   firstCtrl: ['', Validators.required]
 });
 this.secondFormGroup = this.fb.group({
   secondCtrl: ['', Validators.required]
 });
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
        password   :['',[Validators.required, Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
        password1  :['', [Validators.required]],
     },

   );}

}
