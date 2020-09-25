import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
<<<<<<< HEAD
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollingModule} from '@angular/cdk/scrolling';
=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
@NgModule({
  imports: [
    HttpClientModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatMenuModule,
<<<<<<< HEAD
    MatTabsModule,
    MatBadgeModule,
    MatRadioModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatGridListModule,
    ScrollingModule
=======
    MatTabsModule
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  ],
  declarations: [],
  providers: [
  ],
  exports:[
    HttpClientModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatMenuModule,
<<<<<<< HEAD
    MatTabsModule,
    MatBadgeModule,
    MatRadioModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortModule,
    MatStepperModule,
    MatGridListModule,
    ScrollingModule
=======
    MatTabsModule
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
  ]
})
export class MaterialModule {

  constructor() {}

}
