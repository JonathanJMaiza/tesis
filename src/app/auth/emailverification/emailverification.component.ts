import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailverificationComponent implements OnInit {
public user$:Observable<any>=this.auth.AFauth.user;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  Reenviar():void{
    try{
      this.auth.sendVerificationEmail();
    }catch(err){
      console.log(err)
    }

  }

}
