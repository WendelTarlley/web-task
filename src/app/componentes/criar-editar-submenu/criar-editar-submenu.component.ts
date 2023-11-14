import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmenuService } from 'src/app/services/api/submenu/submenu.service';
import { BalaoAvisoService } from 'src/app/services/notificacao/balao-aviso.service';

@Component({
  selector: 'app-criar-editar-submenu',
  templateUrl: './criar-editar-submenu.component.html',
  styleUrls: ['./criar-editar-submenu.component.css']
})
export class CriarEditarSubmenuComponent {

  getIdFormulario(){return this.formularioCriarEditarSubMenu.get('id').value}
  getNomeFormulario(){return this.formularioCriarEditarSubMenu.get('nome').value}
  getNomeComponenteFormulario(){return this.formularioCriarEditarSubMenu.get('nomeComponente').value}
  getIdMenuFormulario(){return this.formularioCriarEditarSubMenu.get('menu').value.get('idMenu').value}
  getNomeMenuFormulario(){return this.formularioCriarEditarSubMenu.get('menu').value.get('nomeMenu').value}


  formularioCriarEditarSubMenu : FormGroup;
  isEditar = true;
  arrayIcones: string[];

  constructor(private formBuilder:FormBuilder, private subMenuService:SubmenuService, private balao_aviso:BalaoAvisoService){}

  @Input() isCriarEditarSubMenu:boolean = true;
  @Output() edicaoCanceladaOuFinalizada = new EventEmitter<any>
  @Input() formularioSubMenuEditar;
  
  ngOnInit(): void {
    
    if (this.formularioSubMenuEditar === undefined) {
      
      this.formularioCriarEditarSubMenu = this.formBuilder.group({
        id:[null],
        nome:[null,[Validators.min(5),Validators.required]],
        nomeComponente:[null,[Validators.min(5),Validators.required,Validators.pattern("^[a-zA-Z_\-]+$")]],
        menu:[null]
      })
    }else{
      this.formularioCriarEditarSubMenu = this.formularioSubMenuEditar
    }
  }


  cancelarEdicao(){
    this.isCriarEditarSubMenu = false;
    this.edicaoCanceladaOuFinalizada.emit(this.isCriarEditarSubMenu)
    this.formularioCriarEditarSubMenu.reset()
  }

  salvarSubMenu(){

    const formData = {
      nome: this.getNomeFormulario(),
      nomeComponente: this.getNomeComponenteFormulario()
    }
    if(this.formularioCriarEditarSubMenu.valid){
      this.subMenuService.salvarSubMenu(JSON.stringify(formData)).subscribe(
        () =>{
        this.balao_aviso.exibirBalaoSucesso("SubMenu salvo com sucesso!")
        this.isCriarEditarSubMenu = false
        this.finalizarEdicao()
      },
        () => this.balao_aviso.exibirBalaoErro('Eror ao salvar menu!')
      )
    }else{
      this.balao_aviso.exibirBalaoErro("Verifique os campos obrigatórios!")
    }
  }
  salvarEdicaoSubMenu(){
    
    const formData = {
      id: this.getIdFormulario(),
      nome: this.getNomeFormulario(),
      nomeComponente: this.getNomeComponenteFormulario(),
      menu :{
        idMenu:this.getIdMenuFormulario(),
        nomeMenu:this.getNomeMenuFormulario()
      }
    }
debugger
    if(this.formularioCriarEditarSubMenu.valid){
      this.subMenuService.salvarAlteracaoSubMenu(JSON.stringify(formData)).subscribe(
        () =>{
        this.balao_aviso.exibirBalaoSucesso("Alteração salva com sucesso!")
        this.isCriarEditarSubMenu = false
        this.finalizarEdicao()
      },
        () => this.balao_aviso.exibirBalaoErro('Eror ao salvar submenu!')
      )
    }else{
      this.balao_aviso.exibirBalaoErro("Verifique os campos obrigatórios!")
    }
  }


  finalizarEdicao(){
    this.edicaoCanceladaOuFinalizada.emit(this.isCriarEditarSubMenu)
  }

  nomeDoBotaoSalvar():string{
    return this.getIdFormulario()===null?'Salvar novo SubMenu':"Salvar alteração SubMenu"
  }

  
  toJson(objeto){
    debugger
    return JSON.stringify(objeto.value, (key, value) => {
       if (key === '_parent') {
         return undefined;
       }
       return value;
     });
    }
}
