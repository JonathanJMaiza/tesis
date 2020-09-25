import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cabecera } from '../models/cabecera';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';
import { Noticias } from '../models/noticias.modelo';
//import { EncabezadoNoticias } from '../models/noticias.modelo';
//import { FileItem } from '../models/file-item';
@Injectable({
  providedIn: 'root'
})

export class NoticiasService {
  //public imagenes=[];
  public cabecera=new Cabecera();
  public storageRef=firebase.storage().ref();
  //public  noticia=new Noticias();
//public encabezado=new EncabezadoNoticias();
  constructor( private db:AngularFirestore) { }

   almacenarArchivos(imagenes:FileItem[], carpeta:string):Promise<any[]>{
     console.log(imagenes.length + 'longitud imagenes');
      let images=[];
    return new Promise<any[]>( (resolve)=>{
      let i=0;
    for (const item of imagenes){

      item.uploading=true;
      if(item.progreso>=100){

        continue;
      }

       const uploadTask: firebase.storage.UploadTask =
                  this.storageRef.child(`${carpeta }/${ item.name }`)
                            .put( item.archivo );
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
                          item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
                          ( error ) => console.error('Error al subir', error ),


            async() => {

              console.log('archivo subido correctamente');
              console.log('img: '+imagenes.length + "i: "+i);
             item.url = await this.storageRef.child(uploadTask.snapshot.ref.fullPath).getDownloadURL();
               //images.push({url:item.url, name:item.name});
               images.push({url:item.url, name:item.name});
              //console.log(imagenes.length +'cambia');
              if(images.length===imagenes.length){
                //console.log('img: '+imagenes.length + "i: "+images.length);

                //console.log(images)
                item.uploading = false;
                console.log(item.uploading);
                return resolve(images);
              }



              //console.log(cabecera);
  /*
              this.guardarPortada(cabecera).then((docRef)=>{
                console.log(docRef.id);
              })
*/
              //this.guardarPortada(cabecera);

            }

      );

    }

     }
   )
  }

guardarPortada(cabecera:Cabecera){
  console.log('si entra a cabecera');
   return this.db.collection('cabecera').add({
    uid_User:cabecera.uid,
    nombre_User:cabecera.nombre_User,
    cargo_User:cabecera.cargo_User,
    photoUrl_User:cabecera.photoUrl_User,
    titulo_cabecera:cabecera.titulo_cabecera,
    descrip_cabecera:cabecera.descrip_cabecera,
    imagen_cabecera:cabecera.imagen_cabecera,
    estado_cabecera:cabecera.estado_cabecera,
    tipo_cabecera:cabecera.tipo_cabecera,
    fecha_pub_cabecera:cabecera.fecha_pub_cabecera,
    visulizaciones:cabecera.visulizaciones
  });

}

async guardarNoticia(cabecera:Cabecera, noticias:Noticias, imagenPortada:FileItem[], imagenesCuerpo:FileItem[], documentos:FileItem[]){
  let carpeta="cabecera";
  let cuerpo="cuerpo";
  let doc="doc";
  let news="noticias";
  //let album:any[];

  if( imagenPortada.length!=0){
      await this.almacenarArchivos(imagenPortada, carpeta).then(resp=>{

        for(let item of resp){
          console.log(item);
        }
        cabecera.imagen_cabecera=resp;
       this.guardarPortada(cabecera).then(resp=>{
         console.log(resp.id);
         noticias.cuid=resp.id;
         this.almacenarArchivos(imagenesCuerpo,news).then(resp=>{
           noticias.imagenes=resp;

           this.almacenarArchivos(documentos, doc).then(resp=>{

             noticias.documentos_cuerpo=resp;
             this.guardarCuerpo(noticias, noticias.cuid)
           })
         }


         );

       })

      });

  }





}

guardarCuerpo(noticia:Noticias, cuid:string){
  const result= this.db.doc(`noticias/${cuid}`).set({
    detalle_cuerpo:noticia.detalle_cuerpo,
    documentos_cuerpo:noticia.documentos_cuerpo,
    imagenes:noticia.imagenes,
    url_yt_cuerpo:noticia.url_yt_cuerpo
  })
return result
}

guardarNotificacion(){

}

}
