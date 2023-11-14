import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any, public snackBarRef:MatSnackBarRef<NotificacaoComponent>){}

}
