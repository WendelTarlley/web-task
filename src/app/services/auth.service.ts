import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient){}

  readonly URLBASE = "http://localhost:8081"

  isAuthenticated(): any {
    var token = localStorage.getItem("token")
    return token === null?false:true;
  }

  logar(usuario:any):Observable<any>{
    return this.http.post(this.URLBASE + "/auth/login",usuario)
  }
  
}
