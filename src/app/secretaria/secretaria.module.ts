import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretariahomeComponent } from './secretariahome/secretariahome.component';
import { EventSecreCrudComponent } from './secreevent/event-secre-crud/event-secre-crud.component';
import { EventSecreHomeComponent } from './secreevent/event-secre-home/event-secre-home.component';
import { NewsSecreHomeComponent } from './newssecre/news-secre-home/news-secre-home.component';
import { NewsSecreCrudComponent } from './newssecre/news-secre-crud/news-secre-crud.component';
import { ProblemSecreCrudComponent } from './problemsecre/problem-secre-crud/problem-secre-crud.component';
import { ProblemSecreHomeComponent } from './problemsecre/problem-secre-home/problem-secre-home.component';
import { GroupSecreHomeComponent } from './groupsecre/group-secre-home/group-secre-home.component';
import { GroupSecreAdminComponent } from './groupsecre/group-secre-admin/group-secre-admin.component';
import { GroupSecreAdminCrudComponent } from './groupsecre/group-secre-admin-crud/group-secre-admin-crud.component';



@NgModule({
  declarations: [SecretariahomeComponent, EventSecreCrudComponent, EventSecreHomeComponent, NewsSecreHomeComponent, NewsSecreCrudComponent, ProblemSecreCrudComponent, ProblemSecreHomeComponent, GroupSecreHomeComponent, GroupSecreAdminComponent, GroupSecreAdminCrudComponent],
  imports: [
    CommonModule
  ]
})
export class SecretariaModule { }
