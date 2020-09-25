import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<FileItem[]>();
  @Output() messageEventCredencial = new EventEmitter<FileItem[]>();
  public user$:Observable<any>= this.auth.AFauth.user;
  public url;
  public urlCredencial;
  public usuario:Usuario=new Usuario();
  estaSobreElemento = false;
  files: FileItem[] = [];
  credencial: FileItem[] = [];
  isOverDrop = false;
  constructor(private auth:AuthService) {
    this.user$.subscribe(rep=>{
      console.log(rep.uid);
      this.auth.getUser(rep.uid).subscribe(resp=>{
        this.usuario=resp;
        console.log(resp.rol);
      })
    })
   }

  ngOnInit(): void {
  }
  readUrl(event:any) {
        console.log('entra');
       if (event.target.files && event.target.files[0]) {
         var reader = new FileReader();

         reader.onload = (event:any) => {
           this.url = event.target.result;
         }
         reader.readAsDataURL(event.target.files[0]);
       }

  }
  readUrlCredencial(event:any) {
        console.log('entra');
       if (event.target.files && event.target.files[0]) {
         var reader = new FileReader();

         reader.onload = (event:any) => {
           this.urlCredencial = event.target.result;
         }
         reader.readAsDataURL(event.target.files[0]);
       }

  }

       cuerpo($event:FileItem[]) {
       this.credencial= $event;
       }
       onUpload():void{
         console.log(this.files.length)
       }
       onUploadCredencial():void{
         console.log(this.credencial.length)
       }

       enviar(){
         console.log('si entra')
         this.messageEvent.emit(this.files);
       }
       eliminar(){
          console.log(document.getElementById('ima'));
          (<HTMLInputElement>document.getElementById('ima')).value = "";
          console.log(document.getElementById('ima'));
          this.url="";
         this.files.splice(0, 1);
         console.log(this.files.length);
       }
       enviarCredencial(){
         console.log('si entra');

         this.messageEventCredencial.emit(this.credencial);
       }
       eliminarCredencial(){
          console.log(document.getElementById('cre'));
          (<HTMLInputElement>document.getElementById('cre')).value = "";
          console.log(document.getElementById('cre'));
          this.urlCredencial="";
         this.credencial.splice(0, 1);
         console.log(this.credencial.length);
       }
       ejecutar(event:any){
         console.log(event);
         this.readUrl(event)
         this.onUpload();
         this.enviar();
       }

       ejecutarCredencial(event:any){
         console.log(event);
         this.readUrlCredencial(event)
         this.onUploadCredencial();
         this.enviarCredencial();
       }

       actualizar(form: NgForm){
         console.log(this.files);
         console.log(this.credencial);

       }
}
