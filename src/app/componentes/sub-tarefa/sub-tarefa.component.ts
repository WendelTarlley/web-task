import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubTarefa } from 'src/app/domain/sub-tarefa';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';
import { SubTarefaService } from 'src/app/services/sub-tarefa/sub-tarefa.service';

@Component({
  selector: 'app-sub-tarefa',
  templateUrl: './sub-tarefa.component.html',
  styleUrls: ['./sub-tarefa.component.css']
})


export class SubTarefaComponent implements OnInit {

  @Input() subTarefas:SubTarefa[]
  @Output() alteracaoSubTarefas = new EventEmitter<any>
  constructor(private subTarefaService:SubTarefaService, private notificacao:BalaoAvisoService) { }

  ngOnInit() {
  }


allComplete: boolean = false;

updateAllComplete() {
  this.allComplete = this.subTarefas != null && this.subTarefas.every(t => t.finalizada);
  this.atualizarSubTarefas()
}

someComplete(): boolean {
  if (this.subTarefas == null) {
    return false;
  }
  return this.subTarefas.filter(t => t.finalizada).length > 0 && !this.allComplete;
}

setAll(finalizada: boolean) {
  this.allComplete = finalizada;
  if (this.subTarefas == null) {
    return;
  }
  this.subTarefas.forEach(t => (t.finalizada = finalizada));
  this.atualizarSubTarefas()
}

  atualizarSubTarefas(){
    debugger
    this.salvarSubTarefas(this.subTarefas)
    this.alteracaoSubTarefas.emit(this.subTarefas)
  }
  salvarSubTarefas(subTarefas: SubTarefa[]) {
    this.subTarefaService.salvarSubTarefas(subTarefas).subscribe(
      {error:() => this.notificacao.exibirBalaoErro("Não foi possível salvar a alteração feita!")}
    )
  }
}
