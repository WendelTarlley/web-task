import { Component, OnInit } from '@angular/core';
import { MenuConfiguracaoComponent } from '../menu-configuracao/menu-configuracao.component';
import { TelaInicialComponent } from '../../tela-inicial/tela-inicial.component';
import { DataService } from 'src/app/services/data.service';
import { SubMenu } from 'src/app/sub-menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit{
  tabs: SubMenu[] = []

  constructor(private dataService:DataService,private menuService:MenuService){}
  ngOnInit(): void {
    let menu = this.dataService.getData();
    
    if (menu === null || menu === undefined) {
      this.menuService.getMenuPorNome("configuracao").subscribe(
        result => this.tabs.push( result.submenu)
      )
    }else{
      this.tabs.push( menu.submenu)
    }
    
  }

}
