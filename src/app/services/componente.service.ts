import {  Injectable, Type } from '@angular/core';
import { MenuConfiguracaoComponent } from '../telas/configuracao/menu-configuracao/menu-configuracao.component';
import { TelaInicialComponent } from '../telas/tela-inicial/tela-inicial.component';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  constructor() {}

  getComponente(nomeComponente: string): Type<any> | null {
    switch (nomeComponente) {
      case "MenuConfiguracaoComponent":
        return MenuConfiguracaoComponent;
      case "TelaInicialComponent":
        return TelaInicialComponent;
      default:
        return null;
    }
  }
}
