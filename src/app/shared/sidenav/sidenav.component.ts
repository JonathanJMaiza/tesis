import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { Usuario } from 'src/app/models/usuario.model';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
@Input()user:Usuario;
public usuario=new Usuario();
step = -1;

  constructor( private auth:AuthService) {
    //console.log(this.user.uid);
    //this.obtenerId()
    //console.log(this.user);
    //this.probaar();
  }



  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {

  }
/*
obtenerId(){
console.log('si entra');
const  persona=this.user$.pipe(map(resp=>{

  return resp.uid;
})).subscribe(resp=>{
  this.usuario.uid=resp;
  console.log(this.usuario.uid);
});
//const prueba=this.auth.obtenerUsuario();
}
*/

obtenerUsuario(id:string){
  // console.log(id);
  this.auth.getUser(id).subscribe(rep=>{
    this.usuario=rep;
  }
  );
}

probaar(){
  console.log('si entra');
  this.auth.probar().subscribe(resp=>console.log(resp))
}
}
