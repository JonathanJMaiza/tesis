import { Routes } from '@angular/router';
import { NoticiasComponent } from '../home/noticias/noticias.component';


export const SECRE_ROUTES: Routes = [
    //{path: 'nuevo/:otroparametro', component: UsuarioNuevoComponent},
    {path: 'noticias', component:NoticiasComponent },
    //{path: 'nuevo', component:CrudusersComponent },
    //{path: 'nuevo/:id', component:CrudusersComponent },
    //{path: 'eventos', component:EventAdminCrudComponent },
    //{path: 'modificar', component:UsershomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'noticias' }];
