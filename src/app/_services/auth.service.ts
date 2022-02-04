import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  login(user:User):Observable<any>{
   return this.httpclient.post<any>(environment.baseUrl + 'user/login',user)
  }
}

interface User{
  email:string,
  password:string
}
