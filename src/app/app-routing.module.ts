import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ClaveComponent } from './auth/clave/clave.component';
import { NoticiaComponent } from './home/noticia/noticia.component';
import { EmailverificationComponent } from './auth/emailverification/emailverification.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { FirstLoginComponent } from './shared/first-login/first-login.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

import { ADMIN_ROUTES } from './admin/admin.routes';
import { SecretariahomeComponent } from './secretaria/secretariahome/secretariahome.component';
import { SECRE_ROUTES } from './secretaria/secretaria.routes';
import { ImagenesComponent } from './shared/imagenes/imagenes.component';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'clave'   , component: ClaveComponent },
  { path: 'admin'   , component: AdminhomeComponent, children:ADMIN_ROUTES },
  { path: 'secretaria'   , component: SecretariahomeComponent, children:SECRE_ROUTES },
  //{ path: 'aeesfot'   , component: AdminhomeComponent, children:AEESFOT_ROUTES },
  //{ path: 'docente'   , component: AdminhomeComponent, children:DOCENTE_ROUTES },
  //{ path: 'estudiante'   , component: AdminhomeComponent, children:ADMIN_ROUTES },
  { path: 'noticia'   , component: NoticiaComponent },
  { path: 'emailverification', component: EmailverificationComponent },
  { path: 'firstlogin', component: FirstLoginComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'imagen', component: ImagenesComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
