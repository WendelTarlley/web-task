import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-dialog-confirmacao',
  templateUrl: './dialog-confirmacao.component.html',
  styleUrls: ['./dialog-confirmacao.component.css']
})
export class DialogConfirmacaoComponent implements OnInit{

  constructor(    @Inject(DIALOG_DATA) @Optional() public data: any,
  public dialogRef:DialogRef){

  }
  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        opcaoPositiva: 'Sim',
        opcaoNegativa: 'Não',
        mensagem: 'Deseja mesmo excluir este item?'
      };
    } else {
      this.data.opcaoPositiva = this.data.opcaoPositiva || 'Sim';
      this.data.opcaoNegativa = this.data.opcaoNegativa || 'Não';
      this.data.mensagem = this.data.mensagem || 'Deseja mesmo excluir este item?';
    }
  }

  

}
