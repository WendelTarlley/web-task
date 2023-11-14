import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogConfirmacaoComponent } from 'src/app/componentes/dialog/dialog-confirmacao/dialog-confirmacao.component';
import { MenuService } from 'src/app/services/api/menu/menu.service';
import { NotificacaoComponent } from 'src/app/componentes/notificacao/notificacao.component';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';
import { DialogDragAndDropComponent } from 'src/app/componentes/dialog/dialog-drag-and-drop/dialog-drag-and-drop.component';
import { SubmenuService } from 'src/app/services/api/submenu/submenu.service';

@Component({
  selector: 'app-menu-configuracao',
  templateUrl: './menu-configuracao.component.html',
  styleUrls: ['./menu-configuracao.component.css']
})
export class MenuConfiguracaoComponent implements OnInit{
  constructor(private menuService:MenuService, private subMenuService:SubmenuService, private notificacao:BalaoAvisoService,
    public dialog:MatDialog){}
  dataSource:any;
  isCriarEditarMenu = false;

  ngOnInit(): void {
    this.buscarMenus();
    
  }

 displayedColumns: string[] = ['editar','id', 'nome', 'link', 'icone','subMenu','acoes'];

  private buscarMenus() {
    this.menuService.getMenu().subscribe(
      result => this.dataSource = result
    );
  }

 cadastrarNovoMenu(){
  this.isCriarEditarMenu = true;
 }

 edicaoCanceladaOuFinalizada(event){
  this.isCriarEditarMenu = event
  this.buscarMenus()
 }

 editarMenu(menu){

 }

 deletarMenu(menu){
  const dialogRef = this.dialog.open(DialogConfirmacaoComponent,{
    data:{
      mensagem:`Deseja deletar o menu de id: ${menu.id} e nome ${menu.nome}`
    }
  })
  dialogRef.afterClosed().subscribe(
    result => {
      if (result) {
        this.menuService.deletarMenu(menu.id).subscribe(
          () => {this.notificacao.exibirBalaoSucesso(`Menu de id: ${menu.id} deletado com sucesso`)
                this.buscarMenus()
        },
          () => this.notificacao.exibirBalaoErro("Ocorreu um erro ao excluir o item.")
        )
      }
    }
  )
 }

 adicionarSubMenu(menu){
  this.subMenuService.buscarSubMenus().subscribe(
    resultado =>{
      
      this.exibirDialogSelecaoMenu(resultado,menu);
    }
  )
 }

  private exibirDialogSelecaoMenu(listaSubMenus: any,menu:any) {
    const dialogRef = this.dialog.open(DialogDragAndDropComponent, {
      data: {
        submenusSelecionados: menu.submenu,
        opcoesSubMenu:listaSubMenus
      }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        {
          menu.submenu = result
          this.menuService.atualizarMenu(menu).subscribe(
            () => this.notificacao.exibirBalaoSucesso("Lista de submenu atualizada com sucesso!")
          )
        }
      }
    );
  }
}
