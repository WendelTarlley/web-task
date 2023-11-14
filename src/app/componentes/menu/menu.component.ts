
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaDeDadosService } from 'src/app/services/transferenciaDeDados/transferencia-de-dados.service';
import { MenuService } from 'src/app/services/api/menu/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
 
  menuItems: any

  constructor(private menuService:MenuService, private dataService:TransferenciaDeDadosService,private router:Router){}
  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      results => this.menuItems = results
    )
  }

  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "pagina-inicial", name: "About", icon: "dashboard" },
    { link: "locations", name: "Locations", icon: "account_balance" },
  ];

  
  showName(){
    this.isExpanded = true
  }
  
  hideName(){
    this.isExpanded = false
  }
  
  onClick(menuSelecionado:any){

    this.dataService.setData(menuSelecionado);
    this.router.navigate([menuSelecionado.link])
  }
}
