import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SubMenu } from 'src/app/domain/sub-menu';
import { MenuService } from 'src/app/services/menu.service';
import { MenuConfiguracaoComponent } from '../menu-configuracao/menu-configuracao.component';
import { TelaInicialComponent } from '../../tela-inicial/tela-inicial.component';
import { ComponenteService } from 'src/app/services/componente.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit{
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  
  tabItems = [
  ];
  
  constructor(private dataService:DataService,private menuService:MenuService,private componenteService:ComponenteService){}
  ngOnInit(): void {
    let menu = this.dataService.getData();
    
    if (menu === null || menu === undefined) {
      this.menuService.getMenuPorNome("configuracao").subscribe(
        result => {
          this.gerarComponente(result.submenu)
          });      
    }else{
      this.gerarComponente(menu.submenu)
    }
    
  }
  
  gerarComponente(menus:any) {
    menus.forEach(element => {
        this.tabItems.push({label:element.nome,content: this.componenteService.getComponente(element.nomeComponente)})
    });
  }
}

