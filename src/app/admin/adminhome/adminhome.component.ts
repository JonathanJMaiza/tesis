import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario.model';
import { map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
public user$:Observable<any>= this.auth.AFauth.user;

public usuario=new Usuario();
  constructor(private auth:AuthService, private _usuario:UsuarioService) {
    //this.obtenerUsuario();
    this.obtenerUsuario();


  }

  ngOnInit(): void {
  }

   obtenerUsuario(){
     let url:string;
      this.user$.pipe().subscribe(resp=>{
          //console.log(resp.uid);
          url=resp.photoURL;
          this.auth.getUser(resp.uid).subscribe(resp=>{
            //console.log(resp);
            this.usuario=resp;
            this.usuario.photoURL=url;

            this._usuario.enviarUsuario(this.usuario);
          //  console.log(this.usuario)
          })


     });
//console.log(this.usuario);

/*
    this.auth.obtenerCosas().subscribe(resp=>{
      console.log(resp+'adafa');
    });
*/
  }
}
