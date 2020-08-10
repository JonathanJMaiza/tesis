import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ClaveComponent } from './auth/clave/clave.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NoticiaComponent } from './home/noticia/noticia.component';
import { EmailverificationComponent } from './auth/emailverification/emailverification.component';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'clave'   , component: ClaveComponent },
  { path: 'menu'   , component: MenuComponent },
  { path: 'noticia'   , component: NoticiaComponent },
  { path: 'emailverification', component: EmailverificationComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
