import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly url = "http://localhost:8081/" 
  constructor(private http:HttpClient) { }

  getMenu():Observable<any>{
    return this.http.get(this.url+"menu"
      )
  }
  getMenuPorNome(menuNome:string):Observable<any>{
    return this.http.get(`${this.url}menu/porNome?nomeMenu=${menuNome}`
      )
  }
}
