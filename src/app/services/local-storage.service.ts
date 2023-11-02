import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvarItemLocalStorage(nomeItem:string,item:string){
    localStorage.setItem(nomeItem,item);
  }

  buscarItemLocalStorage(nomeItem:string):string{
    return localStorage.getItem(nomeItem);
  }

  deletarItemLocalStorage(nomeItem){
    localStorage.removeItem(nomeItem);
  }
}
