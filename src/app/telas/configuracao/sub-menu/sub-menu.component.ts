import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmacaoComponent } from 'src/app/componentes/dialog/dialog-confirmacao/dialog-confirmacao.component';
import { SubmenuService } from 'src/app/services/api/submenu/submenu.service';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit{

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['editar','id', 'nome', 'componente','deletar'];
  isCriarEditarSubMenu = false;
  formularioSubMenuEditar : FormGroup;


  constructor(private submenuservice:SubmenuService,private notificacao:BalaoAvisoService,private formBuilder:FormBuilder,public delecaoDialog:MatDialog){}
  
  ngOnInit(): void {
   this.buscarSubMenus();
   
  }

  cadastrarNovoSubMenu(){
    this.isCriarEditarSubMenu = true;
   }

   edicaoCanceladaOuFinalizada(event){
    this.isCriarEditarSubMenu = event
    this.buscarSubMenus()
   }
  

  deletarSubMenu(submenu){
    const dialogRef = this.delecaoDialog.open(DialogConfirmacaoComponent,{
      data:{
        mensagem:`Deseja deletar o menu de id: ${submenu.id} e nome ${submenu.nome}`
      }
    })
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.submenuservice.deletarSubMenu(submenu.id).subscribe(
            () => {this.notificacao.exibirBalaoSucesso(`Submenu de id: ${submenu.id} deletado com sucesso`)
                  this.buscarSubMenus()
          },
            () => this.notificacao.exibirBalaoErro("Ocorreu um erro ao excluir o item.")
          )
        }
      }
    )
  
   }

   buscarSubMenus(){
    this.submenuservice.buscarSubMenus().subscribe(
      result => this.dataSource = result
    )
   }

   editarSubMenu(subMenu){

    this.formularioSubMenuEditar = this.formBuilder.group({
      id:[subMenu.id],
      nome:[subMenu.nome,[Validators.min(5),Validators.required]],
      nomeComponente:[subMenu.nomeComponente.trim(),[Validators.min(5),Validators.required,Validators.pattern("^[a-zA-Z_\-]+$")]],
      menu:[this.formBuilder.group({
        idMenu:[subMenu.menu.idMenu],
        nomeMenu:[subMenu.menu.nomeMenu]
      })]
    })    
    this.isCriarEditarSubMenu = true
   }

}
