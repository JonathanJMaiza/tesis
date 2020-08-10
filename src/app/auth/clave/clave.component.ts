import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.component.html',
  styleUrls: ['./clave.component.css']
})
export class ClaveComponent implements OnInit {
email= new FormControl('');
  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
  async ResetPass(){
    try{
      const emailuser=this.email.value;
      this.auth.resetPass(emailuser);
      this.router.navigate(["/login"]);
    }catch(err){
      console.log(err)
    }

  }

}
