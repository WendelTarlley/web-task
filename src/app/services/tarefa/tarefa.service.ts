import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
 
  private readonly URLBASE = environment.apiUrl

  constructor(private http:HttpClient) { }

  buscarTarefasPorStatus(status:string):Observable<any>{
    return this.http.get(`${this.URLBASE}tarefa/status/${status}`)
  }

  salvarTarefas(data: any):Observable<any> {
    return this.http.patch(`${this.URLBASE}tarefa`,data)
  }

}
