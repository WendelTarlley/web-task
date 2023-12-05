import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubTarefa } from 'src/app/domain/sub-tarefa';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class SubTarefaService {
  
  private readonly URLBASE = environment.apiUrl

  constructor(private http:HttpClient) { }
  
  salvarSubTarefas(subTarefas:SubTarefa[]):Observable<any> {
    return this.http.patch(`${this.URLBASE}subtarefa`,subTarefas)
  }
}
