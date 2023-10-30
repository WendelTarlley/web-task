import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './componentes/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MenuComponent) menuComponent: MenuComponent;

  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  showName(){
    this.isExpanded = true;
    this.menuComponent.showName()
  }
  
  hideName(){
    this.isExpanded = false;
    this.menuComponent.hideName();
  }
}
