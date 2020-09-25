import { Routes } from '@angular/router';
import { CrudusersComponent } from './users/crudusers/crudusers.component';
import { UsershomeComponent } from './users/usershome/usershome.component';
import { NoticiasComponent } from '../home/noticias/noticias.component';
import { EventAdminCrudComponent } from './eventadmin/event-admin-crud/event-admin-crud.component';
import { NewsAdminCrudComponent } from './newsadmin/news-admin-crud/news-admin-crud.component';


export const ADMIN_ROUTES: Routes = [
    //{path: 'nuevo/:otroparametro', component: UsuarioNuevoComponent},
    {path: 'noticias', component:NoticiasComponent },
    {path: 'nuevo', component:CrudusersComponent },
    {path: 'nuevo/:id', component:CrudusersComponent },
    {path: 'eventos', component:EventAdminCrudComponent },
    {path: 'crearnoticias/:id', component:NewsAdminCrudComponent },
    {path: 'modificar', component:UsershomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'noticias' }];
