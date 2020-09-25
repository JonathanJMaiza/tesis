import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router}  from '@angular/router'
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Usuario } from 'src/app/models/usuario.model';
=======
import { UsuarioModel } from 'src/app/models/usuario.model';
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public existUser=false;
//para imprimir datos en el menu
public user$:Observable<any>= this.auth.AFauth.user;

<<<<<<< HEAD

=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  constructor(private auth:AuthService,
              private router:Router,
              ) { }

   ngOnInit() {

    /*this.user=await this.auth.getCurrentUser();
    if(this.user){
      this.existUser=true;
      console.log(this.user)
    }
    */
  }
async salir(){
<<<<<<< HEAD
  try{
    await this.auth.logout();
      //this.router.navigate(['/login']);


  }catch(err){
    console.log(err);
  }


}

eliminarcuenta(){
  try{
    this.auth.borrarCuenta();
  }catch(err){
    console.log(err)
  }
=======
  await this.auth.logout();
  this.router.navigate['/login'];

>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
}
}
