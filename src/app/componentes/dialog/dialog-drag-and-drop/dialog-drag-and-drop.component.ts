import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-drag-and-drop',
  templateUrl: './dialog-drag-and-drop.component.html',
  styleUrls: ['./dialog-drag-and-drop.component.css']
})
export class DialogDragAndDropComponent implements OnInit{

  constructor(@Inject(DIALOG_DATA) public data: any,
  public dialogRef:DialogRef){}

  submenusSelecionados;
  listaSubmenus;
  ngOnInit(): void {
    debugger
   this. submenusSelecionados = this.data.submenusSelecionados

   this.listaSubmenus = this.data.opcoesSubMenu
   this.listaSubmenus = this.listaSubmenus.filter(item => !this.submenusSelecionados.some(i => i.idSubMenu === item.idSubMenu));
  }
  
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
    }
  }
  
}
