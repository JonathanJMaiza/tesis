import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {auth} from 'firebase/app'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public AFauth: AngularFireAuth, private db:AngularFirestore,
    private router:Router) { }


    async login(usuario:UsuarioModel){

    const authData = {
      ...usuario,
    };
    const result= await this.AFauth.signInWithEmailAndPassword(authData.email, authData.password);
    return result;
    //const obser=from(this.AFauth.signInWithEmailAndPassword(authData.email, authData.password));
    //  return obser;
    }

    async register(usuario:UsuarioModel){
      const authData = {
        ...usuario,
      };
      //console.log(authData.email);
      //console.log(authData.password);
      const result= await this.AFauth.createUserWithEmailAndPassword(authData.email, authData.password).then(
        resp=>{
          console.log(resp.user.uid);
          console.log(authData.genero)
           this.db.doc(`usuarios/${resp.user.uid}`).set({
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
 }

 async logout(){
  await this.AFauth.signOut();
 }
  async getCurrentUser(){
    return this.AFauth.authState.pipe(first()).toPromise();
  }

  async resetPass(email:string):Promise<void>{
      try{
        const result= await this.AFauth.sendPasswordResetEmail(email);
      }catch(err){
        console.log(err)
      }
  }

  async loginGoogle(){
    try{
      return this.AFauth.signInWithPopup( new auth.GoogleAuthProvider());
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
}
