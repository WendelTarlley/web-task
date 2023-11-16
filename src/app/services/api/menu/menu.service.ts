import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService { 
  
  private readonly URLBASE: string = environment.apiUrl;
  constructor(private http:HttpClient) { }
  
  getMenu():Observable<any>{
    return this.http.get(this.URLBASE+"menu"
    )
  }
  getMenuPorNome(menuNome:string):Observable<any>{
    return this.http.get(`${this.URLBASE}menu/porNome?nomeMenu=${menuNome}`
    )
  }

  salvarMenu(menu):Observable<any> {
    return this.http.post(`${this.URLBASE}menu`,menu)
  }

  deletarMenu(menuId):Observable<any> {
    return this.http.delete(`${this.URLBASE}menu/${menuId}`)
  }

  atualizarMenu(menu: any) {
    return this.http.patch(`${this.URLBASE}menu`,menu)
  }
}
