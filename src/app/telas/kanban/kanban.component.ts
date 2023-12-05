import { CdkDragDrop,  moveItemInArray,  transferArrayItem,  CdkDropList,  CdkDropListGroup,} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { StatusTarefa } from 'src/app/enums/status-tarefa.enum';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit{
  todo: any;
  doing: any;
  test: any;
  done: any;
  
  constructor(private tarefaService:TarefaService,private notificacao:BalaoAvisoService){}

  ngOnInit(): void {
    this.tarefaService.buscarTarefasPorStatus(StatusTarefa.ToDo).subscribe(
      (result) => this.todo = result
    )

    this.tarefaService.buscarTarefasPorStatus(StatusTarefa.Doing).subscribe(
      (result) => this.doing = result
    )

    this.tarefaService.buscarTarefasPorStatus(StatusTarefa.Test).subscribe(
      (result) => this.test = result
    )

    this.tarefaService.buscarTarefasPorStatus(StatusTarefa.Done).subscribe(
      (result) => this.done = result
    )
  }

  listGroup: CdkDropListGroup<CdkDropList[]>;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.alterarStatusTarefa(event.container)
      this.salvarAlteraçãoStatusTarefa(event.container.data)
    }
  }
  salvarAlteraçãoStatusTarefa(data) {
    this.tarefaService.salvarTarefas(data).subscribe(
      {
        next:() =>{},
        error:() => {this.notificacao.exibirBalaoErro("Erro ao mudar Status do card!")}
      }
    )
  }
  alterarStatusTarefa(container: any) {
    switch (container.id) {
      case "todo":
        container.data.forEach(item => item.status = StatusTarefa.ToDo)
        break;
      case "doing":
        container.data.forEach(item => item.status = StatusTarefa.Doing)
        break;  
      case "test":
        container.data.forEach(item => item.status = StatusTarefa.Test)
        break;
      case "done":
        container.data.forEach(item => item.status = StatusTarefa.Done)  
        break;
    }
  }

  adicionarNovaTarefa(){
   
  }
}
