import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubTarefa } from 'src/app/domain/sub-tarefa';

@Component({
  selector: 'app-sub-tarefa',
  templateUrl: './sub-tarefa.component.html',
  styleUrls: ['./sub-tarefa.component.css']
})


export class SubTarefaComponent implements OnInit {

  @Input() subTarefas:SubTarefa[]
  @Output() alteracaoSubTarefas = new EventEmitter<any>
  constructor() { }

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
    this.alteracaoSubTarefas.emit(this.subTarefas)
  }
}
