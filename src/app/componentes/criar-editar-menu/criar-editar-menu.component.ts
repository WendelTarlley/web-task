import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArquivoService } from 'src/app/services/arquivo.service';
import { IconDialogComponent } from '../dialog/icon-dialog/icon-dialog.component';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-criar-editar-menu',
  templateUrl: './criar-editar-menu.component.html',
  styleUrls: ['./criar-editar-menu.component.css']
})
export class CriarEditarMenuComponent implements OnInit{

  @Input() isCriarEditarMenu:boolean = true;
  @Output() edicaoCancelada = new EventEmitter<any>
  
  getIconeFormulario(){
    return this.formularioCriarEditarMenu.get('icone').value

  }

  getNomeFormulario(){
    return this.formularioCriarEditarMenu.get('nome').value

  }

  getLinkFormulario(){
    return this.formularioCriarEditarMenu.get('link').value

  }

  formularioCriarEditarMenu : FormGroup;
  isEditar = true;
  arrayIcones: string[];

  constructor(private formBuilder:FormBuilder, private arquivoService:ArquivoService,
    private dialog:Dialog, private menuService:MenuService){}

  ngOnInit(): void {
    this.formularioCriarEditarMenu = this.formBuilder.group({
      id:[null],
      nome:[null,[Validators.min(5),Validators.required]],
      link:[null,[Validators.min(5),Validators.required,Validators.pattern("^[a-z_-]*$")]],
      icone:[null,Validators.required]
    })
  }


  cancelarEdicao(){
    this.isCriarEditarMenu = false;
    this.edicaoCancelada.emit(this.isCriarEditarMenu)
    this.formularioCriarEditarMenu.reset()
  }

  salvarMenu(menu){
    const formData = {
      nome: this.getNomeFormulario(),
      link: this.getLinkFormulario(),
      icone: this.getIconeFormulario()
    }

    if(this.formularioCriarEditarMenu.valid){
      this.menuService.salvarMenu(JSON.stringify(formData)).subscribe()
    }
  }

  abrirSelecaoIcone(){
    this.arquivoService.getArquivoIcones().subscribe(
      (data:string) => {
        this.arrayIcones = data.split(',')
        const dialogRef = this.dialog.open(IconDialogComponent,{
          maxHeight:'300px',
          maxWidth:'500px',
          data: this.arrayIcones
          
        })
        
        dialogRef.closed.subscribe(
          result => {
            this.formularioCriarEditarMenu.get('icone').setValue(result)
          }
          )
        }
      )
  }
}

