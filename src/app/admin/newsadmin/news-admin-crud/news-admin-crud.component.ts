import { Component, OnInit, ElementRef, Input, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { FileItem } from 'src/app/models/file-item';
import { NoticiasService } from 'src/app/services/noticias.service';
import { UrlyoutubeService } from 'src/app/services/urlyoutube.service';
import { Cabecera } from 'src/app/models/cabecera';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
//import { CargarCabeceraService } from 'src/app/services/cargar-cabecera.service';
import { Noticias } from 'src/app/models/noticias.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-news-admin-crud',
  templateUrl: './news-admin-crud.component.html',
  styleUrls: ['./news-admin-crud.component.css']
})

export class NewsAdminCrudComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  cabecera:Cabecera=new Cabecera;
  noticias:Noticias=new Noticias;
  filesImagenPortada: FileItem[]=[];
  filesImagenCuerpo: FileItem[]=[];
  filesDocuments: FileItem[]=[]
  url: string[]=[];
  usuario:Usuario=new Usuario();
  get titulo_cabecera(){
  return this.firstFormGroup.get('titulo_cabecera').invalid && this.firstFormGroup.get('titulo_cabecera').touched
  }
  get descrip_cabecera(){
  return this.firstFormGroup.get('descrip_cabecera').invalid && this.firstFormGroup.get('descrip_cabecera').touched
  }
  constructor(private fb:FormBuilder,
             private _youtube:UrlyoutubeService,
             private _usuario:UsuarioService,
             private auth:AuthService,
             //private _portada:CargarCabeceraService,
             private _noticia:NoticiasService,
              private activatedRoute:ActivatedRoute) {
    this.crearFormulario();
    this.activatedRoute.params.subscribe(params=>{
      if(params['id']!=undefined){
        console.log('va ha crear');
        this.auth.getUser(params['id']).subscribe(
           resp=>{
            this.usuario=resp;
            this.cabecera.cargo_User=this.usuario.rol;
            this.cabecera.uid=this.usuario.uid;
            this.cabecera.nombre_User=this.usuario.nombre + " " +this.usuario.apellido;
            this.cabecera.photoUrl_User=this.usuario.photoURL;
            /*
            var d =parseInt(this.usuario.fechanacimiento['seconds']);
            console.log(d);
            var s = new Date(d*1000);
            this.usuario.fechanacimiento=s;
            console.log(s)

            //console.log(Date(this.usuario.fechanacimiento['seconds']));
            */
        }
      )
      }
    })

  //  this.crearFormulario2();
    //this.extractUrl();
  }

    ngOnInit() {
      console.log('se ejecuta');
      //this.rellenarDatosUsuario();
      /*
      this._usuario.enviarUsuarioObservable.subscribe(resp=>{
        console.log('rellana en user');
       this.usuario=resp;
       console.log(this.usuario.uid);
       this.cabecera.cargo_User=this.usuario.rol;
       this.cabecera.uid=this.usuario.uid;
       this.cabecera.nombre_User=this.usuario.nombre + " " +this.usuario.apellido;
       this.cabecera.photoUrl_User=this.usuario.photoURL;
       console.log(resp.nombre);
       /*
       //this.noticias.cid=this.usuario.uid;
       console.log(this.cabecera.uid+'formulario');
       localStorage.setItem('uid', resp.uid);
       localStorage.setItem('rol', resp.rol);
       localStorage.setItem('nombre', resp.nombre+resp.apellido );
       localStorage.setItem('url', resp.photoURL);
*/
/*
});*/
  }
  ngOnDestroy(){
    this.rellenarDatosUsuario().unsubscribe;
  }

  get nyoutubelinks(){
    return this.firstFormGroup.get('nyoutubelinks') as FormArray;
  }
  agregarLinkYoutube(){

      let valor=this.nyoutubelinks.length;
      let elemento:string=valor.toString();
      console.log(valor)
      if(valor==0){
        this.nyoutubelinks.push(this.fb.control(
        '', [Validators.required, Validators.pattern('^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+')]
        ));
      }else{
        let refe= valor-1;
        //console.log(this.nyoutubelinks.get(refe.toString()));
        this.nyoutubelinks.get(refe.toString()).markAsTouched;
        if(this.nyoutubelinks.get(refe.toString()).invalid){
            this.nyoutubelinks.get(refe.toString()).setErrors;
        }else{
          console.log(  this.nyoutubelinks.get(refe.toString()).value);
          this.nyoutubelinks.push(this.fb.control(

         '', [Validators.required, Validators.pattern('^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+')]
          ));
        }
      }
  }

  borrarLinkYoutube(i:number){
    this.nyoutubelinks.removeAt(i);
  }

  crearFormulario(){
    this.firstFormGroup = this.fb.group({
     titulo_cabecera: ['', Validators.required],
     descrip_cabecera:['', Validators.required],
     cuerpo_noticia: ['', Validators.required],
     nyoutubelinks: this.fb.array([
     ])
   });
  }
  /*
  crearFormulario2(){
    this.secondFormGroup = this.fb.group({
  ndetalle: ['', Validators.required],
  nyoutubelinks: this.fb.array([
  ])
});

  }
*/
  onUpload(firstFormGroup:FormGroup){
    console.log('si entra');
    if(this.firstFormGroup.invalid){

      console.log('que paso hay error');
      return Object.values(this.firstFormGroup.controls).forEach(control=>{
        if (control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched()) ;
          }else{
            control.markAsTouched();
          }
        });
        /*
        Object.values(this.secondFormGroup.controls).forEach(control=>{
          if (control instanceof FormGroup){
            Object.values(control.controls).forEach(control=>control.markAsTouched()) ;
            }else{
              control.markAsTouched();
            }
          });
*/

}else{
  console.log('si esta todo correcto');
  var fecha= new Date()
  this.cabecera.fecha_pub_cabecera=fecha;
  this.cabecera.tipo_cabecera='noticia';
  this.cabecera.estado_cabecera='aprobado';
  this.cabecera.visulizaciones=0;
  this.getlinks();
  console.log(this.usuario.uid +'vacio');
  this.rellenarDatosUsuario()
  console.log(this.usuario.uid +'vacio');
  /*
  if(this.usuario.uid==undefined){
    this.cabecera.cargo_User=localStorage.getItem('rol');
    this.cabecera.uid=localStorage.getItem('uid');
    this.cabecera.nombre_User=localStorage.getItem('name');
    this.cabecera.photoUrl_User=localStorage.getItem('url');

  }
  */
  this._noticia.guardarNoticia(this.cabecera, this.noticias, this.filesImagenPortada, this.filesImagenCuerpo,this.filesDocuments );
//  var imprimir=[];

  //console.log(fecha);

  for(let item of this.noticias.url_yt_cuerpo){
    console.log(item);
  }


}

  }
  portada($event:FileItem[]) {
  this.filesImagenPortada = $event;
  console.log('sirecibe kakaka')
  console.log(this.filesImagenPortada);
  }
  cuerpo($event:FileItem[]) {
  this.filesImagenCuerpo = $event;
  console.log('sirecibe kakaka')
  console.log(this.filesImagenCuerpo);
  }
  documents($event:FileItem[]) {
    this.filesDocuments = $event;
    console.log('sirecibe kakaka')
    console.log(this.filesDocuments);
  }
  extractUrl(){
    var valor=this._youtube.entraUrl('https://youtu.be/4OKNIzJlZyc');
    console.log(valor);
    }

    rellenarDatosUsuario(){
    return   this._usuario.enviarUsuarioObservable.subscribe(resp=>{
       this.usuario=resp;
       console.log(this.usuario.uid);
       this.cabecera.cargo_User=this.usuario.rol;
       this.cabecera.uid=this.usuario.uid;
       this.cabecera.nombre_User=this.usuario.nombre + " " +this.usuario.apellido;
       this.cabecera.photoUrl_User=this.usuario.photoURL;
       //this.noticias.cid=this.usuario.uid;
       console.log(this.cabecera.uid+'formulario');

      });
    }

    getlinks(){
      //console.log(this.nyoutubelinks.controls.length);
        for(let i=0;i<this.nyoutubelinks.controls.length;i++){
          //console.log('si entra');
          var url=this.nyoutubelinks.value[i];
          this.url.push(url);
        }
        //console.log(this.url.length +'SI VALE');
        this.noticias.url_yt_cuerpo=this.url;
    }
}
