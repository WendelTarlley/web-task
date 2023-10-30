import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { LoginComponent } from './telas/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './telas/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule }from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuService } from './services/menu.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    HttpClientModule,
    MatTooltipModule,
  ],
  providers: [
    MenuService,
    HttpClient,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
