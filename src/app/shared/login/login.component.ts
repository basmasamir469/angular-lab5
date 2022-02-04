import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onlogin(form:NgForm){
 this.auth.login(form.value).subscribe(
   (res)=>{
     console.log(res);
     sessionStorage.setItem('token',res.token)
   },
   (err)=>{},
   ()=>{}
 )
  }
}
