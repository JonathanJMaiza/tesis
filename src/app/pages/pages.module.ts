import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './eventsconfig/events/events.component';
import { CrudeventsComponent } from './eventsconfig/crudevents/crudevents.component';
import { GroupsComponent } from './groupsconfig/groups/groups.component';
import { CrudgroupsComponent } from './groupsconfig/crudgroups/crudgroups.component';
import { NewsComponent } from './newsconfig/news/news.component';
import { CrudnewsComponent } from './newsconfig/crudnews/crudnews.component';
import { UsersComponent } from './usersconfig/users/users.component';



@NgModule({
  declarations: [EventsComponent, CrudeventsComponent, GroupsComponent, CrudgroupsComponent, NewsComponent, CrudnewsComponent, UsersComponent],
  imports: [
    CommonModule
  ],
  exports:[
    EventsComponent,
    CrudeventsComponent,
    NewsComponent,
    CrudnewsComponent,
    GroupsComponent,
    CrudgroupsComponent,
    UsersComponent
  ]
})
export class PagesModule { }
