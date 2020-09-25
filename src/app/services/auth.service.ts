import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {auth} from 'firebase/app'
import { Router } from '@angular/router';
<<<<<<< HEAD
import { first, map, filter } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';
=======
import { first } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
  public storageRef=firebase.storage().ref();
userRef:AngularFirestoreDocument<Usuario>;
usu: Observable<Usuario>;
public usuario=new Usuario();
=======

>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  constructor(public AFauth: AngularFireAuth, private db:AngularFirestore,
    private router:Router) { }


<<<<<<< HEAD
    async login(usuario:Usuario){
=======
    async login(usuario:UsuarioModel){
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472

    const authData = {
      ...usuario,
    };
    const result= await this.AFauth.signInWithEmailAndPassword(authData.email, authData.password);
    return result;
    //const obser=from(this.AFauth.signInWithEmailAndPassword(authData.email, authData.password));
    //  return obser;
    }
<<<<<<< HEAD
/*
    async registerNuevo(usuario:Usuario){
      const authData = {
        ...usuario,
      }
         const result=await this.AFauth.createUserWithEmailAndPassword(authData.email,authData.password).then(
         resp=>{
           resp.user.updateProfile({
             uid:authData.uid,


           })
         }
       );
       return result
    }
*/
    async register(usuario:Usuario){
      const authData = {
        ...usuario,
      }
      /*
      if(authData.rol=='estudiante'){
        authData.usuario_verificado=true;
      }else{
        authData.usuario_verificado=false;
      }
      */
=======

    async register(usuario:UsuarioModel){
      const authData = {
        ...usuario,
      };
      //console.log(authData.email);
      //console.log(authData.password);
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
      const result= await this.AFauth.createUserWithEmailAndPassword(authData.email, authData.password).then(
        resp=>{
          console.log(resp.user.uid);
          console.log(authData.genero)
           this.db.doc(`usuarios/${resp.user.uid}`).set({
<<<<<<< HEAD
            uid:resp.user.uid,
            email : authData.email,
            nombre: authData.nombre,
            apellido: authData.apellido,
            fechanacimiento: authData.fechanacimiento,
            rol:authData.rol,
            usuario_verificado:authData.usuario_verificado,
            creado:'firebase',
            estado:authData.estado,
            genero:authData.genero,
            password: authData.password
        }

      );

      resp.user.updateProfile({
          displayName: authData.apellido,
      })
      return resp;
    });


      await this.sendVerificationEmail();
      //this.router.navigate(['/emailverification']);
      return result;

  }

    async sendVerificationEmail(){
      try{
      const  result=(await this.AFauth.currentUser).sendEmailVerification();
      return result;
    }catch(error){
      return error
    }
=======
            email : authData.email,
            nombre: authData.nombre,
            apellido: authData.apellido,
            fec_nac: authData.fechanacimiento,
            rol:'Estudiante',
            genero:authData.genero,

        }

      );
      return result;
    });
      await this.sendVerificationEmail();
      this.router.navigate(['/emailverification']);
      return result;
  }

    async sendVerificationEmail(): Promise<void> {
   return (await this.AFauth.currentUser).sendEmailVerification();
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
 }

 async logout(){
  await this.AFauth.signOut();
 }
<<<<<<< HEAD
 //ESTE YA NO SE USA MUCHO
=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  async getCurrentUser(){
    return this.AFauth.authState.pipe(first()).toPromise();
  }

<<<<<<< HEAD
  async resetPass(email:string){

        const result= await this.AFauth.sendPasswordResetEmail(email);
        return result;

=======
  async resetPass(email:string):Promise<void>{
      try{
        const result= await this.AFauth.sendPasswordResetEmail(email);
      }catch(err){
        console.log(err)
      }
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  }

  async loginGoogle(){
    try{
<<<<<<< HEAD
      return (await this.AFauth.signInWithPopup( new auth.GoogleAuthProvider()))
=======
      return this.AFauth.signInWithPopup( new auth.GoogleAuthProvider());
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
    }catch(err){
      console.log(err);
    }
  }

  async loginFacebook(){
    try{
      return this.AFauth.signInWithPopup( new auth.FacebookAuthProvider());
    }catch(err){
      console.log(err);
    }
  }
<<<<<<< HEAD
  async borrarCuenta(){
    try{
      return (await this.AFauth.currentUser).delete()

    }catch(err){
      console.log(err)
    }
  }

  obtenerUsuario(uid:string){
  const userRef: AngularFirestoreDocument<Usuario> = this.db.doc(
  //  `usuarios/GfZjzQl6yuNlCAamz6VCogIr0id2`);
  `usuarios/${uid}`);
     userRef.valueChanges().subscribe(data=>{
      if(data){
        console.log('si entra')
        console.log(data.nombre+'')
      }else{
        console.log('no hay nada')
      }

      return userRef;
    });


  }
  getUser(uid:string){

    const userRef : AngularFirestoreDocument<Usuario> = this.db.doc(`usuarios/${uid}`);
      this.usu=userRef.snapshotChanges().pipe(map(a=>{
      const data=a.payload.data() as Usuario;
      if(data){
        this.usuario=data;
        console.log(data);
        const id=a.payload.id;
        return {id, ...data};
      }else{
        return null;
      }

    }))
return this.usu;

  }
  getUsuarios(): Observable<Usuario[]>{
    return this.db.collection('usuarios', ref=>ref.where('estado','==', 'activo')).snapshotChanges().pipe(map(resp=>resp.map(a=>{
      const data= a.payload.doc.data() as Usuario;
      const  id = a.payload.doc.id;
      return { id, ...data};
    })
    ))
  }

  probar(){
    var datos:string[]=["activo","eliminado"];
    //return this.getUsuarios().pipe(filter(resp=>(resp.map(a=> a.estado)).toString()=="activo" ), map(resp=>{
    //  return resp;
    //}))
    return this.db.collection('usuarios', ref=>ref.where('estado','in', datos)).snapshotChanges().pipe(map(resp=>resp.map(a=>{
      const data= a.payload.doc.data() as Usuario;
      const  id = a.payload.doc.id;
      return { id, ...data};
    })
    ));
  }

  registrar_usurios_g_f(usuario:Usuario){
    const authData = {
      ...usuario,
    }
      this.userRef=this.db.doc(`usuarios/${usuario.uid}`);
      this.userRef.valueChanges().subscribe(data=>{
        if(data){

        }else{
          this.db.doc(`usuarios/${usuario.uid}`).set({
           uid:usuario.uid,
           email : authData.email,
           nombre:authData.nombre,
           apellido:"",
           rol:"estudiante",
           estado:"nuevo",
           usuario_verificado:true,
           creado:'google'
           //password:authData.password

       }

     );
        }
      })
  }
   updateUser(usuario:Usuario){
      this.db.doc(`usuarios/${usuario.uid}`).update(usuario);
      //this.userRef=this.db.

  /*    firebase.firestore().collection("users").where("uid", "==", payload.uid)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          doc.update({foo: "bar"})
      });
 })*/
   }

   estadoUser(uid:string){
      let user =new Usuario;
     this.getUser(uid).subscribe(rep=>{
        user=rep;
        if(user.estado=='nuevo'){

          return true;
        }else if(user.estado=='activo'){
          return true;
        }else{
          return false;
        }
     });
   }

   eliminarUsuario(uid:string){
     this.db.doc(`usuarios/${uid}`).update({
       estado:"eliminado",
     });

   }
    async borrarUsuerio(uid:string){
     return this.db.doc(`usuarios/${uid}`).delete().then(()=>{
       console.log('se borro satisfactoriamente')
     }).catch(err=>{
       return err;
     });
   }

   ingreso(correo:string, password:string){
     return this.db.collection('usuarios', ref=>{
       return ref .where('password','==',password)
                  .where('email','==',correo)
     }).snapshotChanges().pipe(first(),map(resp=>resp.map(a=>{
       const data= a.payload.doc.data() as Usuario;
       const  id = a.payload.doc.id;
       return { id, ...data};
     })
     ))

   }
   ingresoT(correo:string, password:string){
     return this.db.collection('usuarios', ref=>{
       return ref .where('password','==',password)
                  .where('email','==',correo)
     }).valueChanges();
   }

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


updateUserwithImg(){

}

=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
}
