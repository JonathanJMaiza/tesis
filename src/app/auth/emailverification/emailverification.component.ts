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
<<<<<<< HEAD
      console.log('entra al error email')
=======
>>>>>>> f2e46ff82be4fdccc9ac2b193db0cd5657e04472
      console.log(err)
    }

  }

}
