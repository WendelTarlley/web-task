
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
 
  menuItems: any

  constructor(private menuService:MenuService){}
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
  
}
