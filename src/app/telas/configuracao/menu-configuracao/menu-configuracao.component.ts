import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-configuracao',
  templateUrl: './menu-configuracao.component.html',
  styleUrls: ['./menu-configuracao.component.css']
})
export class MenuConfiguracaoComponent implements OnInit{
  constructor(private menuService:MenuService){}
  dataSource:any;
  isCriarEditarMenu = true;

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      result => this.dataSource = result
    )
    
  }

 displayedColumns: string[] = ['id', 'nome', 'link', 'icone','subMenu'];

 cadastrarNovoMenu(){
  this.isCriarEditarMenu = true;
 }

 edicaoCancelada(event){
  this.isCriarEditarMenu = event
 }
}
