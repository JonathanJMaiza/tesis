import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';;
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usershome',
  templateUrl: './usershome.component.html',
  styleUrls: ['./usershome.component.css']
})
export class UsershomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'rol', 'email','actions'];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
    console.log('se ejecuta')
    this.auth.getUsuarios().subscribe(res=>{
      this.dataSource.data=res;
    });
    this.prueba();

 }
 ngAfterViewInit(){

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
 }
  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   eliminarUsuario(url:string){
     this.auth.eliminarUsuario(url);
   }
   eliminarDOs(url:string){
     this.auth.borrarUsuerio(url);
   }

   prueba(){

     this.auth.probar().subscribe(resp=>{
       console.log(resp);
     })
   }
}
