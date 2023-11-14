import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmenuService {
  

  private readonly URLBASE: string = environment.apiUrl;

  
  constructor(private http:HttpClient) { }


  buscarSubMenus():Observable<any>{
    return this.http.get(`${this.URLBASE}submenu`)
  }

  buscarSubMenuPorNome(submenuNome:string):Observable<any>{
    return this.http.get(`${this.URLBASE}submenu/porNome?nomeMenu=${submenuNome}`
    )
  }

  salvarSubMenu(submenu):Observable<any> {
    return this.http.post(`${this.URLBASE}submenu`,submenu)
  }

  deletarSubMenu(submenuId):Observable<any> {
    return this.http.delete(`${this.URLBASE}submenu/${submenuId}`)
  }

  salvarAlteracaoSubMenu(submenu):Observable<any> {
    return this.http.post(`${this.URLBASE}submenu/atualizar`,submenu)
  }
}
