import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../../domain/tarefa';
import { SubTarefa } from 'src/app/domain/sub-tarefa';

@Component({
  selector: 'app-card-kanban',
  templateUrl: './card-kanban.component.html',
  styleUrls: ['./card-kanban.component.css']
})
export class CardKanbanComponent implements OnInit{
  
  @Input() doneList:Tarefa
  @Input() toDo:Tarefa
  
  
  progressoTarefa = 0

  constructor() { }
  async ngOnInit(): Promise<void> {
       this.progressoTarefa =  await this.atualizarBarraDeProgresso()
       console.log(await this.atualizarBarraDeProgresso())

  }

  async atualizarBarraDeProgresso(){
    let totalLista = this.toDo.subTarefas.length;

    let finalizados:number = await new Promise((resolve) => {
      const progresso = this.toDo.subTarefas.reduce(
        (acumulador: number, subtarefa: SubTarefa) => {
          return subtarefa.finalizada ? acumulador + 1 : acumulador;
        },
        0
      );
      resolve(progresso);
    });
  
    return (finalizados / totalLista) * 100;
  
  }

  async getSubTarefasAtualizadas(subTarefas){
    this.toDo.subTarefas = subTarefas
    this.progressoTarefa =  await this.atualizarBarraDeProgresso()
  }

}
