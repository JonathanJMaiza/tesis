import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';
import { finalize } from 'rxjs/internal/operators/finalize';
@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
private CARPETA_IMAGENES='img';
  constructor(private db:AngularFireStorage) { }

  private generateFileName(name: string): string {
     return `${this.CARPETA_IMAGENES}/${new Date().getTime()}_${name}`;
   }

  uploadImage(images:FileItem[]){
    for(const item of images){
      item.uploading=true;
      const filePath=this.generateFileName(item.name);
      const fileRef=this.db.ref(filePath);
      const task= this.db.upload(filePath, item.file);



      item.uploadPercent=task.percentageChanges();
       task.snapshotChanges().pipe(
        finalize( ()=>{
        item.downloadURL = fileRef.getDownloadURL();
          item.uploading=false;

        })
      ).subscribe();
    }
  }
}
