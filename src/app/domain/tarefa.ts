import { StatusTarefa } from '../enums/status-tarefa.enum';
import { SubTarefa } from './sub-tarefa';


export class Tarefa {
  idTarefa?:number;
  nome: string;
  status:StatusTarefa
  subTarefas:SubTarefa[]
}
