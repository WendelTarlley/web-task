import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor(private http: HttpClient) { }

    private readonly URL_ASSETS = "../assets/"

  getArquivoIcones(){
    return this.http.get(`${this.URL_ASSETS}icones.txt`, {responseType: 'text'});
  }
}
