import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArquivoService } from 'src/app/services/arquivo/arquivo.service';
import { IconDialogComponent } from '../dialog/icon-dialog/icon-dialog.component';
import { MenuService } from 'src/app/services/api/menu/menu.service';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-editar-menu',
  templateUrl: './criar-editar-menu.component.html',
  styleUrls: ['./criar-editar-menu.component.css']
})
export class CriarEditarMenuComponent implements OnInit{
  getIdMenuFormulario(){return this.formularioCriarEditarMenu.get('idMenu').value}
  getIconeFormulario(){return this.formularioCriarEditarMenu.get('icone').value}
  getNomeFormulario(){return this.formularioCriarEditarMenu.get('nome').value}
  getLinkFormulario(){return this.formularioCriarEditarMenu.get('link').value}


  @Input() isCriarEditarMenu:boolean = true;
  @Output() edicaoCanceladaOuFinalizada = new EventEmitter<any>
  @Input() formularioMenuEditar

  formularioCriarEditarMenu : FormGroup;
  isEditar = true;
  arrayIcones: string[];

  constructor(private formBuilder:FormBuilder, private arquivoService:ArquivoService,
    private iconeDialog:MatDialog, private menuService:MenuService, private balao_aviso:BalaoAvisoService){}

  ngOnInit(): void {
    if (this.formularioMenuEditar === undefined) {
      
      this.formularioCriarEditarMenu = this.formBuilder.group({
        idMenu:[null],
        nome:[null,[Validators.min(5),Validators.required]],
        link:[null,[Validators.min(5),Validators.required,Validators.pattern("^[a-z_-]*$")]],
        icone:[null,Validators.required]
      })
    }else{
      this.formularioCriarEditarMenu = this.formularioMenuEditar
    }
    }


  cancelarEdicao(){
    this.isCriarEditarMenu = false;
    this.edicaoCanceladaOuFinalizada.emit(this.isCriarEditarMenu)
    this.formularioCriarEditarMenu.reset()
  }

  salvarMenu(){
    const formData = {
      nome: this.getNomeFormulario(),
      link: this.getLinkFormulario(),
      icone: this.getIconeFormulario()
    }

    if(this.formularioCriarEditarMenu.valid){
      this.menuService.salvarMenu(JSON.stringify(formData)).subscribe(
        () =>{
        this.balao_aviso.exibirBalaoSucesso("Menu salvo com sucesso!")
        this.isCriarEditarMenu = false
        this.finalizarEdicao()
      },
        () => this.balao_aviso.exibirBalaoErro('Eror ao salvar menu!')
      )
    }else{
      this.balao_aviso.exibirBalaoErro("Verifique os campos obrigatórios!")
    }
  }

  salvarEdicaoMenu(){
    
    const formData = {
      idMenu: this.getIdMenuFormulario(),
      nome: this.getNomeFormulario(),
      link: this.getLinkFormulario(),
      icone: this.getIconeFormulario()
    }

    if(this.formularioCriarEditarMenu.valid){
      this.menuService.atualizarMenu(JSON.stringify(formData)).subscribe(
        () =>{
        this.balao_aviso.exibirBalaoSucesso("Alteração salva com sucesso!")
        this.isCriarEditarMenu = false
        this.finalizarEdicao()
      },
        () => this.balao_aviso.exibirBalaoErro('Eror ao salvar submenu!')
      )
    }else{
      this.balao_aviso.exibirBalaoErro("Verifique os campos obrigatórios!")
    }
  }
  abrirSelecaoIcone(){
    this.arquivoService.getArquivoIcones().subscribe(
      (data:string) => {
        this.arrayIcones = data.split(',')
        const dialogRef = this.iconeDialog.open(IconDialogComponent,{
          maxHeight:'300px',
          maxWidth:'500px',
          data: this.arrayIcones
          
        })
        
        dialogRef.afterClosed().subscribe(
          result => {
            this.formularioCriarEditarMenu.get('icone').setValue(result)
          }
          )
        }
      )
  }

  finalizarEdicao(){
    this.edicaoCanceladaOuFinalizada.emit(this.isCriarEditarMenu)
  }

}

