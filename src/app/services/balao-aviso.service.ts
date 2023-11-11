import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacaoComponent } from '../componentes/notificacao/notificacao.component';

@Injectable({
  providedIn: 'root'
})
export class BalaoAvisoService {

  constructor(private snackBar:MatSnackBar){}

  exibirBalaoErro(mensagem:string){
    this.snackBar.openFromComponent(NotificacaoComponent,{
      data:{
        titulo:'Erro',
        mensagem:mensagem
      },
        horizontalPosition:'end',
        verticalPosition:'top',
        duration:5000,
        panelClass:"error"
    })
  }

  exibirBalaoSucesso(mensagem:string){
    this.snackBar.openFromComponent(NotificacaoComponent,{
      data:{
        titulo:'Sucesso',
        mensagem:mensagem
      },
        horizontalPosition:'end',
        verticalPosition:'top',
        duration:5000,
        panelClass:"sucesso"
    })
  }
  exibirBalaoAviso(mensagem:string){
    this.snackBar.openFromComponent(NotificacaoComponent,{
      data:{
        titulo:'Aviso',
        mensagem:mensagem
      },
        horizontalPosition:'end',
        verticalPosition:'top',
        duration:5000,
        panelClass:"aviso"
    })
  }
}
  
