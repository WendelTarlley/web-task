import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogConfirmacaoComponent } from 'src/app/componentes/dialog/dialog-confirmacao/dialog-confirmacao.component';
import { MenuService } from 'src/app/services/api/menu/menu.service';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';
import { DialogDragAndDropComponent } from 'src/app/componentes/dialog/dialog-drag-and-drop/dialog-drag-and-drop.component';
import { SubmenuService } from 'src/app/services/api/submenu/submenu.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-configuracao',
  templateUrl: './menu-configuracao.component.html',
  styleUrls: ['./menu-configuracao.component.css']
})
export class MenuConfiguracaoComponent implements OnInit{
  constructor(private menuService:MenuService, private subMenuService:SubmenuService, private notificacao:BalaoAvisoService,
    private formBuilder:FormBuilder,public dialog:MatDialog){}

  dataSource:any;
  isCriarEditarMenu = false;

  formularioMenuEditar : FormGroup;


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
    this.formularioMenuEditar = this.formBuilder.group({
      idMenu:[menu.idMenu],
      nome:[menu.nome,[Validators.min(5),Validators.required]],
      link:[menu.link.trim(),[Validators.min(5),Validators.required,Validators.pattern("^[a-zA-Z_\-]+$")]],
      icone:[menu.icone,Validators.required]

    })    
    this.isCriarEditarMenu = true
 }

 deletarMenu(menu){
  let dialogRef;

  if(!this.verificarSeExiteSubMenu(menu)){
    
    dialogRef = this.dialog.open(DialogConfirmacaoComponent,{
      data:{
        mensagem:`Deseja deletar o menu de id: ${menu.idMenu} e nome ${menu.nome}`
      }
    })
  }
    
  dialogRef.afterClosed().subscribe(
    result => {
      if (result) {
        this.menuService.deletarMenu(menu.idMenu).subscribe(
          {
            next:() => {
              this.notificacao.exibirBalaoSucesso(`Menu de id: ${menu.idMenu} deletado com sucesso`)
              this.buscarMenus()
            },
            error:() => {
              this.notificacao.exibirBalaoErro("Ocorreu um erro ao excluir o item.")
            },
          }
        )
      }
    }
  )
 }

 adicionarSubMenu(menu){
  this.subMenuService.buscarSubMenusSemMenu().subscribe(
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
        { if (result !== undefined) {

          menu.submenu = result
          this.menuService.atualizarMenu(menu).subscribe(
            () => this.notificacao.exibirBalaoSucesso("Lista de submenu atualizada com sucesso!")
            )
          }
        }
      }
    );
  }
  verificarSeExiteSubMenu(menu: any):boolean {
    if (menu.submenu.length !== 0) {
      this.notificacao.exibirBalaoAviso(`Remover submenu acossiado ao Menu: ${menu.nome}, antes de excluí-lo!`)
      return true;
    }else{
      return false;
    }
}
}

