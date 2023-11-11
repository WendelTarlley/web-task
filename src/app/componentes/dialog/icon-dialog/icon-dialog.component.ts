import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ArquivoService } from 'src/app/services/arquivo.service';

@Component({
  selector: 'app-icon-dialog',
  templateUrl: './icon-dialog.component.html',
  styleUrls: ['./icon-dialog.component.css']
})
export class IconDialogComponent implements OnInit{

  arrayIcones: string[];

  constructor(private arquivoService:ArquivoService,
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef:DialogRef){

  }
  ngOnInit(): void {
    this.arquivoService.getArquivoIcones().subscribe(
      result => this.arrayIcones = result.split(',')
    )
  }

  selecionarIcone(iconeSelecionado){
    debugger
    this.dialogRef.close(iconeSelecionado)
  }
}
