import { ComponentType } from "@angular/cdk/portal";

export interface SubMenu {
  nome: string;
  nomeComponente: ComponentType<any>; // Use 'any' para aceitar qualquer tipo de componente
}
