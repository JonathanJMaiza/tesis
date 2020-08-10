import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalendarComponent } from './calendar/calendar.component';
import {MaterialModule} from './../material.module';
import {AppRoutingModule} from './../app-routing.module'

@NgModule({
  declarations: [MenuComponent, SidenavComponent, CalendarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
    SidenavComponent,
    CalendarComponent
  ]
})
export class SharedModule { }
