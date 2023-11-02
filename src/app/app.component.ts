import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './componentes/menu/menu.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MenuComponent) menuComponent: MenuComponent;
  isAutenticado: any;

  constructor(private authService: AuthService) {
    this.isAutenticado = this.authService.isAuthenticated();
  }
  
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
